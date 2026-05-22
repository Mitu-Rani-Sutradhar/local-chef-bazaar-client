
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';




const Profile = () => {
    const { user } = useAuth();
    console.log(user);

    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user.email}`);
            return res.data;
        }

    })
    // console.log(users[0]?.displayName,users[0]?.role,users[0]?.email,users[0]?.photoURL);

    const userInfo = {
        userName: users[0]?.displayName,
        userEmail: users[0]?.email,
        // photoURL: users[0]?.photoURL,
        // role: users[0]?.role || 'user'
    };
    // console.log(userInfo);

    const handleChefApplication = () => {
        // console.log('request for chef');
        const updatedUserInfo = {
            ...userInfo,
            requestType: 'chef',
            requestStatus: "pending",
            requestTime: new Date().toISOString()
        };
        console.log(updatedUserInfo);
        axiosSecure.post('/requests', updatedUserInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your request has been submitted. Please wait for admin approval.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }




    const handleAdminApplication = () => {
        const updatedUserInfo = {
            ...userInfo,
            requestType: 'admin',
            requestStatus: "pending",
            requestTime: new Date().toISOString()
        };
        console.log(updatedUserInfo);
        axiosSecure.post('/requests', updatedUserInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your request has been submitted. Please wait for admin approval.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-6 ml-10'>Profile</h2>
            <div className='pl-20'>
                <img className='h-[100px] w-[100px] rounded-full' src={user?.photoURL} alt="User" />
                <p className='py-3'>User Name: {user?.displayName}</p>
                <p className='py-3'>User Email: {user.email}</p>
                {/* <p className='py-3'>User Role : {user.role}</p> */}
                {
                    users.map(u => <p key={u._id} className='py-3'>User role: {u.role}</p>)
                }
                {/* <p className='py-3'>User Status: {user.status}</p> */}
                {/* <p className='py-3'>Chef Id: {user.chefId}</p> */}

                <div className='py-6'>
                    <button onClick={() => handleChefApplication()} className='btn btn-primary p-2 text-md'>Be a chef</button>
                    <button onClick={() => handleAdminApplication()} className='btn btn-primary p-2 text-md ml-5'>Be an admin</button>
                </div>

            </div>



        </div>
    );
};

export default Profile;