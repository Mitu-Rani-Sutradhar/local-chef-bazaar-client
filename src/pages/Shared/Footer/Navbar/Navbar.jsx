import React from "react";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import logoImg from "../../../../assets/logo.png";
import useAuth from "../../../../hooks/useAuth";


const Navbar = () => {

  const { user, logOut } = useAuth();


  const handleLogOut = () => {
    logOut()
      .catch(error => console.log(error));
  };


  const navVariants = {
    hidden: {
      opacity: 0,
      y: -40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };


  const linkVariants = {
    hover: {
      scale: 1.05,
    },
  };



  const links = (
    <>
      <motion.li whileHover="hover" variants={linkVariants}>
        <NavLink to="/">
          Home
        </NavLink>
      </motion.li>


      <motion.li whileHover="hover" variants={linkVariants}>
        <NavLink to="/meals">
          Meals
        </NavLink>
      </motion.li>


      {
        user ? (
          <>
            <motion.li whileHover="hover" variants={linkVariants}>
              <NavLink to="/blog">
                Blog
              </NavLink>
            </motion.li>


            <motion.li whileHover="hover" variants={linkVariants}>
              <NavLink to="/dashboard">
                Dashboard
              </NavLink>
            </motion.li>
          </>
        )
        :
        (
          <motion.li whileHover="hover" variants={linkVariants}>
            <NavLink to="/about">
              About
            </NavLink>
          </motion.li>
        )
      }

    </>
  );



  return (

    <motion.div

      variants={navVariants}
      initial="hidden"
      animate="visible"

      className="
      max-w-7xl
      mx-auto
      mt-4
      sticky
      top-4
      z-50
      rounded-3xl
      overflow-hidden
      bg-gradient-to-r
      from-orange-50
      via-white
      to-yellow-50
      shadow-xl
      border
      border-orange-100
      "

    >


      <div
        className="
        navbar
        px-4
        md:px-6
        "
      >



        {/* LEFT SIDE */}

        <div className="navbar-start">


          {/* Mobile Menu */}

          <div className="dropdown lg:hidden">

            <div
              tabIndex={0}
              role="button"
              className="
              btn
              btn-ghost
              rounded-full
              "
            >

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
              className="
              menu
              menu-sm
              dropdown-content
              mt-3
              w-52
              bg-white
              rounded-2xl
              shadow-xl
              p-3
              z-[100]
              "
            >

              {links}

            </ul>


          </div>





          {/* LOGO */}

          <Link
            to="/"
            className="
            flex
            items-center
            gap-2
            "
          >

            <motion.img

              whileHover={{
                scale: 1.1,
                rotate: 5
              }}

              src={logoImg}

              alt="logo"

              className="
              w-10
              h-10
              md:w-12
              md:h-12
              rounded-full
              shadow-md
              "

            />


            <span
              className="
              font-bold
              text-lg
              md:text-xl
              text-orange-600
              "
            >

              Comfort Kitchen

            </span>


          </Link>



        </div>







        {/* CENTER MENU */}


        <div
          className="
          navbar-center
          hidden
          lg:flex
          "
        >

          <ul
            className="
            menu
            menu-horizontal
            gap-3
            font-medium
            "
          >

            {links}

          </ul>


        </div>







        {/* RIGHT SIDE */}


        <div
          className="
          navbar-end
          "
        >


          {
            user ?

            (

              <div
                className="
                flex
                items-center
                gap-3
                "
              >



                {/* Profile Dropdown */}


                <div
                  className="
                  dropdown
                  dropdown-end
                  "
                >


                  <motion.img

                    whileHover={{
                      scale:1.1
                    }}

                    tabIndex={0}

                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${user?.displayName}`
                    }

                    alt="user"

                    className="
                    w-10
                    h-10
                    rounded-full
                    object-cover
                    cursor-pointer
                    border-2
                    border-orange-400
                    "

                  />



                  <div

                    tabIndex={0}

                    className="
                    dropdown-content
                    mt-3
                    w-64
                    bg-white
                    rounded-2xl
                    shadow-xl
                    p-4
                    "

                  >


                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <img

                        src={
                          user?.photoURL ||
                          `https://ui-avatars.com/api/?name=${user?.displayName}`
                        }

                        className="
                        w-12
                        h-12
                        rounded-full
                        "
                      />


                      <div>

                        <p className="font-semibold">
                          {user?.displayName}
                        </p>


                        <p className="
                        text-sm
                        text-gray-500
                        ">
                          {user?.email}
                        </p>


                      </div>


                    </div>


                  </div>


                </div>





                <motion.button

                  whileHover={{
                    scale:1.05
                  }}

                  whileTap={{
                    scale:.95
                  }}

                  onClick={handleLogOut}

                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  "
                >

                  Logout

                </motion.button>



              </div>

            )


            :


            (

              <Link

                to="/login"

                className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-5
                py-2
                rounded-full
                "

              >

                Login

              </Link>

            )

          }


        </div>



      </div>


    </motion.div>

  );
};


export default Navbar;