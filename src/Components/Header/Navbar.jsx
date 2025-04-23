import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const getNavLinkClass = ({ isActive }) =>
        `font-medium text-lg cursor-pointer ${isActive ? "text-[#176AE5] text-xl" : "opacity-70 hover:text-[#176AE5]"}`;

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => `${getNavLinkClass({ isActive })} mr-12`}>Home</NavLink>
            <NavLink to="/bookList" className={({ isActive }) => `${getNavLinkClass({ isActive })} mr-12`}>My-Bookings</NavLink>
            <NavLink to="/blogs" className={({ isActive }) => `${getNavLinkClass({ isActive })} mr-12`}>Blogs</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
        </>
    );

    const linksDropdown = (
        <>
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/bookList" className={getNavLinkClass}>My-Bookings</NavLink>
            <NavLink to="/blogs" className={getNavLinkClass}>Blogs</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
        </>
    );

    return (
        <div className="navbar max-w-7xl mx-auto py-4 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#176AE5]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white">
                        {linksDropdown}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className='w-10 h-10' src={logo} alt="logo" />
                    <a className="font-bold text-3xl text-[#176AE5]">DocTalk</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary font-medium text-xl py-5 px-6 bg-[#176AE5] text-[#FFFFFF] rounded-4xl">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;