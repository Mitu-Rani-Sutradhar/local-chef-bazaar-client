// import React from 'react';

// import { Link, NavLink } from 'react-router';
// import logoImg from '../../../../assets/logo.png'
// import useAuth from '../../../../hooks/useAuth';
// const Navbar = () => {

//   const {user, logOut} = useAuth();
//   console.log(user);

//   const handleLogOut = () =>{
//     logOut()
//     .then()
//     .catch(error => {
//       console.log(error);
//     })
//   }

//  const links = <>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/meals">Meals</NavLink></li>
      
     
//      {/* {
//       user && <>
//        <li><NavLink to="/dashboard/my-orders">My Orders</NavLink></li>
//        <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
//       </>
//      } */}
//      {
//       user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
//      }
      
//  </>



//     return (
//        <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         {links}
//       </ul>
//     </div>
//     <img className='h-[50px] w-[50px] rounded-3xl' src={logoImg} alt="" />
//     <a className="btn btn-ghost text-xl">LocalChefBazaar</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//        {links}
//     </ul>
//   </div>
//   <div className="navbar-end">
   
  
//    {/* { 
//     user ?  
     
//     <a onClick={handleLogOut} className="btn btn-primary">LogOut</a> 
//     :  
//     <Link className="btn" to='/login'>Login</Link>
//    } */}

//    {
//     user ? (
//       <div className="flex items-center gap-3">
//       {/* User Photo */}
//       <img
//         src={user?.photoURL}
//         alt={user?.displayName || "User"}
//         className="w-10 h-10 rounded-full object-cover border"
//       />


//       {/* Logout Button */}
//       <a onClick={handleLogOut} className="btn btn-primary">
//         LogOut
//       </a>
//     </div>
//     ): 
//     <Link className="btn" to='/login'>Login</Link>
//    }
   
//   </div>
// </div>
//     );
// };

// export default Navbar;


import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../../../assets/logo.png';
import useAuth from '../../../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().catch(error => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/meals">Meals</NavLink></li>
      
    
      {user ?(<div className='flex'>
      <li className='mr-2'><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </div>): <li><NavLink to="/about">About</NavLink></li>
      }
    </>
  );

  return (
    // <div className="navbar bg-base-100 shadow-sm">

    //   {/* ── Navbar Start ── */}
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    //         </svg>
    //       </div>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    //         {links}
    //       </ul>
    //     </div>
    //     <img className="h-[50px] w-[50px] rounded-3xl" src={logoImg} alt="" />
    //     <a className="btn btn-ghost text-xl">LocalChefBazaar</a>
    //   </div>

    //   {/* ── Navbar Center ── */}
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       {links}
    //     </ul>
    //   </div>

    //   {/* ── Navbar End ── */}
    //   <div className="navbar-end">
    //     {user ? (
    //       <div className="flex items-center gap-3">

    //         {/* ── Profile picture with dropdown ── */}
    //         <div className="dropdown dropdown-end">
    //           {/* Trigger: profile picture */}
    //           <div tabIndex={0} role="button" className="cursor-pointer">
    //             <img
    //               src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&background=random`}
    //               alt={user?.displayName || 'User'}
    //               className="w-10 h-10 rounded-full object-cover border-2 border-primary"
    //             />
    //           </div>

    //           {/* Dropdown: name + email only */}
    //           <div
    //             tabIndex={0}
    //             className="dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 shadow-lg border border-base-200"
    //           >
    //             <div className="flex items-center gap-3 px-4 py-4">
    //               <img
    //                 src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&background=random`}
    //                 alt={user?.displayName || 'User'}
    //                 className="w-12 h-12 rounded-full object-cover border flex-shrink-0"
    //               />
    //               <div className="overflow-hidden">
    //                 <p className="font-semibold text-sm text-base-content truncate">
    //                   {user?.displayName || 'Anonymous'}
    //                 </p>
    //                 <p className="text-xs text-gray-400 truncate">
    //                   {user?.email}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* ── Logout button unchanged ── */}
    //         <a onClick={handleLogOut} className="btn btn-primary">LogOut</a>

    //       </div>
    //     ) : (
    //       <Link className="btn" to="/login">Login</Link>
    //     )}
    //   </div>

    // </div>

    <div className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="navbar max-w-7xl mx-auto px-4">

    {/* Navbar Start */}
    <div className="navbar-start">

      {/* Mobile Menu */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[100]"
        >
          {links}
        </ul>
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-10 w-10 rounded-full"
          src={logoImg}
          alt="Logo"
        />
        <span className="font-bold text-lg md:text-xl">
          LocalChefBazaar
        </span>
      </Link>
    </div>

    {/* Navbar Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2">
        {links}
      </ul>
    </div>

    {/* Navbar End */}
    <div className="navbar-end">
      {user ? (
        <div className="flex items-center gap-2 md:gap-4">

          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img
                src={
                  user?.photoURL ||
                  `https://ui-avatars.com/api/?name=${user?.displayName}&background=random`
                }
                alt={user?.displayName}
                className="w-10 h-10 rounded-full border-2 border-primary object-cover cursor-pointer"
              />
            </div>

            <div
              tabIndex={0}
              className="dropdown-content bg-base-100 rounded-box w-64 mt-3 shadow-lg border"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${user?.displayName}&background=random`
                    }
                    alt={user?.displayName}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <p className="font-semibold">
                      {user?.displayName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-sm md:btn-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="btn btn-primary btn-sm md:btn-md">
          Login
        </Link>
      )}
    </div>

  </div>
</div>
  );
};

export default Navbar;