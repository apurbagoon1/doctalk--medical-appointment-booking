import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to = '/'><li className="mr-12 font-medium text-lg opacity-70 cursor-pointer hover:text-[#176AE5]">Home</li></Link>
        <Link to = ''><li className="mr-12 font-medium text-lg opacity-70 cursor-pointer hover:text-[#176AE5]">My-Bookings</li></Link>
        <Link to = ''><li className="mr-12 font-medium text-lg opacity-70 cursor-pointer hover:text-[#176AE5]">Blogs</li></Link>
        <Link to = ''><li className="font-medium text-lg opacity-70 cursor-pointer hover:text-[#176AE5]">Contact Us</li></Link>        
    </>
    const linksDropdown = <>
        <li className="m-2 opacity-70 cursor-pointer hover:text-[#176AE5]">Home</li>
        <li className="m-2 opacity-70 cursor-pointer hover:text-[#176AE5]">My-Bookings</li>
        <li className="m-2 opacity-70 cursor-pointer hover:text-[#176AE5]">Blogs</li>
        <li className="m-2 opacity-70 cursor-pointer hover:text-[#176AE5]">Contact Us</li>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto py-4 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#176AE5]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                <a className="btn btn-primary font-medium text-lg px-5 bg-[#176AE5] text-[#FFFFFF] rounded-3xl">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;