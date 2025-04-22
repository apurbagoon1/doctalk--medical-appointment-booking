import React from 'react';
import Banner1 from '../../assets/images/banner-img-1.png'
import Banner2 from '../../assets/images/banner-img-2.jpg'

const Banner = () => {
    return (
        <div className='mx-12 border-3 border-white rounded-3xl bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] py-10 text-center mb-8'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <h1 className='font-extrabold text-5xl leading-14'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='font-medium text-lg opacity-80'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className='flex gap-4 my-6 items-center justify-center'>
                <input className='bg-white px-5 py-2 w-2/5 rounded-3xl border border-gray-200' type="text" name="" id="" placeholder='Search any doctor...'/>
                <button className='btn btn-primary font-medium text-lg bg-[#176AE5] text-[#FFFFFF] rounded-3xl'>Search Now</button>
            </div>

            <div className="flex justify-center gap-6 mb-2">
                <img className='' src={Banner1} alt="" />
                <img className='rounded-2xl' src={Banner2} alt="" />

            </div>            
        </div>
    );
};

export default Banner;