import React, { Suspense } from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="relative">
            {isLoading && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                    <span className="loading loading-dots loading-lg text-[#176AE5]"></span>
                </div>
            )}

            <Navbar />

            <Suspense fallback={
                <div className="text-center my-10">
                    <span className="loading loading-dots loading-lg text-[#176AE5]"></span>
                </div>
            }>
                <Outlet />
            </Suspense>

            <ToastContainer position="top-center" autoClose={3000} />
            <Footer />
        </div>
    );
};

export default Root;
