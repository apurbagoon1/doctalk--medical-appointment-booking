import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import errorImage from '../../assets/images/Error-page.jpg'

const Error = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-5 text-center">
                <img
                    src={errorImage}
                    alt="Error"
                    className="max-w-xl rounded-xl mb-6"
                />
                <h2 className="text-4xl font-bold text-red-400 mb-4">Oops! Page Not Found</h2>
                <p className="text-lg opacity-60 max-w-2xl mb-2">
                    The page you’re trying to access doesn’t exist or may have been moved.
                </p>
                <p className="text-sm opacity-50 mb-5">
                    You can try reloading the page — sometimes that works. Or, click the button below to return to the homepage.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#176AE5] text-white font-semibold px-6 py-3 rounded-3xl"
                >
                    <FaArrowLeft /> Go Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
