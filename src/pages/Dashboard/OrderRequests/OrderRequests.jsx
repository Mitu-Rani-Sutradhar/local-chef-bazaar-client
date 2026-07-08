import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const getOrderStatus = (order) =>
  (order.orderStatus ?? order.deliveryStatus ?? 'pending').toLowerCase();

const getButtonStates = (status) => ({
  canCancel: status === 'pending',
  canAccept: status === 'pending',
  canDeliver: status === 'accepted',
});

const OrderRequests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [updatingId, setUpdatingId] = useState(null);

  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orders', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-order-requests/${user?.email}`);
      return res.data;
    },
  });

  const updateStatus = async (id, orderStatus) => {
    setUpdatingId(id);
    try {
      await axiosSecure.put(`/manage-order-requests/${id}/status`, {
        orderStatus,
        deliveryStatus: orderStatus,
      });

      queryClient.setQueryData(['orders', user?.email], (prev = []) =>
        prev.map((order) =>
          order._id === id
            ? { ...order, orderStatus, deliveryStatus: orderStatus }
            : order
        )
      );

      toast.success(`Order ${orderStatus}!`);
      refetch();
    } catch (err) {
      const message = err?.response?.data?.message ?? 'Failed to update status';
      toast.error(message);
    } finally {
      setUpdatingId(null);
    }
  };

  const statusBadge = (status) => {
    const map = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] ?? 'bg-gray-100 text-gray-600'}`}>
        {status}
      </span>
    );
  };

  const ActionButtons = ({ order }) => {
    const status = getOrderStatus(order);
    const { canCancel, canAccept, canDeliver } = getButtonStates(status);
    const isUpdating = updatingId === order._id;

    return (
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => updateStatus(order._id, 'cancelled')}
          disabled={!canCancel || isUpdating}
          className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl sm:rounded-lg text-sm sm:text-xs font-medium bg-red-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-600 active:scale-95 transition-all whitespace-nowrap"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => updateStatus(order._id, 'accepted')}
          disabled={!canAccept || isUpdating}
          className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl sm:rounded-lg text-sm sm:text-xs font-medium bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 active:scale-95 transition-all whitespace-nowrap"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => updateStatus(order._id, 'delivered')}
          disabled={!canDeliver || isUpdating}
          className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl sm:rounded-lg text-sm sm:text-xs font-medium bg-amber-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-600 active:scale-95 transition-all whitespace-nowrap"
        >
          Deliver
        </button>
      </div>
    );
  };

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        Order Requests
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-500">({orders.length})</span>
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-lg">No order requests yet.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 sm:hidden">
            {orders.map((order, index) => {
              const status = getOrderStatus(order);
              return (
                <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                    {statusBadge(status)}
                  </div>

                  <p className="font-semibold text-gray-800 text-base">{order.foodName}</p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                    <span className="text-gray-400">Price</span>
                    <span className="font-medium text-gray-800">${order.price * order.quantity}</span>

                    <span className="text-gray-400">Qty</span>
                    <span>{order.quantity}</span>

                    <span className="text-gray-400">Payment</span>
                    <span>{statusBadge(order.paymentStatus)}</span>

                    <span className="text-gray-400">Email</span>
                    <span className="truncate">{order.userEmail}</span>

                    <span className="text-gray-400">Time</span>
                    <span className="text-xs">{order.orderTime}</span>

                    <span className="text-gray-400">Address</span>
                    <span className="text-xs">{order.userAddress}</span>
                  </div>

                  <div className="pt-2">
                    <ActionButtons order={order} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Food Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Order Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Email</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Order Time</th>
                  <th className="px-4 py-3 hidden xl:table-cell">Address</th>
                  <th className="px-4 py-3">Payment</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {orders.map((order, index) => {
                  const status = getOrderStatus(order);
                  return (
                    <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-500">{index + 1}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{order.foodName}</td>
                      <td className="px-4 py-3 whitespace-nowrap">${order.price * order.quantity}</td>
                      <td className="px-4 py-3">{order.quantity}</td>
                      <td className="px-4 py-3">{statusBadge(status)}</td>
                      <td className="px-4 py-3 hidden lg:table-cell max-w-[160px] truncate text-gray-500">{order.userEmail}</td>
                      <td className="px-4 py-3 hidden lg:table-cell whitespace-nowrap text-gray-500 text-xs">{order.orderTime}</td>
                      <td className="px-4 py-3 hidden xl:table-cell max-w-[160px] truncate text-gray-500 text-xs">{order.userAddress}</td>
                      <td className="px-4 py-3">{statusBadge(order.paymentStatus)}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <ActionButtons order={order} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderRequests;
