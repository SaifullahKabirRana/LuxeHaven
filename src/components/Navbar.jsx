import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import userDefaultPic from '../../src/assets/user.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <li><NavLink to='/profile'>Update Profile</NavLink></li>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="animate__animated animate__backInLeft relative z-10 mt-2 md:mt-3 lg:mt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="-ml-6 md:-ml-0 btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul id="nav"
                            tabIndex={0}
                            className=" menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" -ml-2 md:-ml-0 font-extrabold text-2xl md:text-3xl lg:text-4xl font-glitch gap-0">Luxe<span className="text-[#00b795]">Haven</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="nav" className="menu menu-horizontal gap-2 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2">
                    {
                       user && 
                       <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 md:w-11  rounded-full ">
                                    {/* <img src={user?.photoURL ? user.photoURL : userDefaultPic} alt="" /> */}
                                    {
                                        user &&
                                        <>
                                            {
                                                user?.photoURL ?
                                                    <img className="border-2  border-gray-300 rounded-full" alt="image" src={user.photoURL} />
                                                    :
                                                    <img className=" " alt="image" src={userDefaultPic} />
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[155px] md:w-[220px] p-2 shadow">
                            {
                                user && <>
                                    <div className="flex gap-1 md:gap-2 items-center md:p-1 ">
                                        <img src={user?.photoURL? user.photoURL : userDefaultPic} alt="" className="w-10 md:w-14 h-11 md:h-14 rounded-lg dark:bg-gray-500" />
                                        <div>
                                            <h2 className="mt-1 text-[12px] font-semibold">{user?.displayName}</h2>
                                            <span className="flex items-center ">
                                                <Link to='/profile'  className="text-[10px] md:text-[12px] hover:underline dark:text-gray-600">View profile</Link>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            }
                        </ul>
                    </div> 
                    }
                
                
                    {
                        user ?
                            <button onClick={handleLogOut} className="border btn btn-sm md:btn-md text-[14px] md:text-[16px] px-5 md:px-8 text-white font-s#00b795 bg-[#00b795]">Log Out</button>
                            :
                            <Link to='/login'>
                                <button className="border btn btn-sm md:btn-md text-[14px] md:text-[16px] px-5 md:px-8 text-white font-s#00b795 bg-[#00b795]">Login</button>
                            </Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;