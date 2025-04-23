import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const getNavLinkClass = ({ isActive }) =>
        `font-medium text-base cursor-pointer ${isActive ? "text-[#176AE5] text-lg" : "opacity-70 hover:text-[#176AE5]"}`;

    return (
        <footer className="footer footer-horizontal footer-center bg-white py-12 -space-y-3">
            <div className="flex items-center gap-3">
                <img className='w-10 h-10' src={logo} alt="logo" />
                <a className="font-bold text-3xl text-[#176AE5]">DocTalk</a>
            </div>
            <nav className="grid grid-flow-col gap-10">
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                <NavLink to="/bookList" className={getNavLinkClass}>My-Bookings</NavLink>
                <NavLink to="/blogs" className={getNavLinkClass}>Blogs</NavLink>
                <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
            </nav>
            <div className='border border-[#0F0F0F20] w-2/3'></div>
            <nav>
                <div className="grid grid-flow-col gap-5 text-2xl">
                    <a href="#" className='text-[#3b5998] hover:scale-110 transition-transform'><FaFacebook /></a>
                    <a href="#" className='text-[#00acee] hover:scale-110 transition-transform'><FaTwitter /></a>
                    <a href="#" className='text-[#0077b5] hover:scale-110 transition-transform'><FaLinkedinIn /></a>
                    <a href="#" className='text-[#FF0000] hover:scale-110 transition-transform'><FaYoutube /></a>
                </div>
            </nav>
            <aside>
                <p className='text-base opacity-70'>Copyright © {new Date().getFullYear()} - All right reserved by DocTalk.</p>
            </aside>
        </footer>
    );
};

export default Footer;
