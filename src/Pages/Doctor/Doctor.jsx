import React from 'react';
import { Link } from 'react-router'; 

const Doctor = ({ doctor }) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const isAvailableToday = doctor.availability.includes(today);
    return (
        <div className='bg-white rounded-2xl shadow-md p-6'>
            <div>
                <img className='rounded-2xl' src={doctor.image} alt="" />
            </div>
            <div className='flex justify-between items-center py-4 px-1.5'>
                {isAvailableToday ? (
                    <span className="font-medium text-sm text-[#09982F] bg-[#09982F20] border border-[#09982F30] rounded-4xl py-1.5 px-3">Available</span>
                ) : (
                    <span className="bg-[#FF000020] border border-[#FF000030] text-[#FF0000] text-sm px-3 py-1.5 rounded-2xl font-medium">Unavailable</span>
                )}
                <span className="font-medium text-sm text-[#176AE5] bg-[#176AE520] border border-[#176AE530] rounded-4xl py-1.5 px-3">
                    {doctor.experience} Experience
                </span>
            </div>
            <div className='space-y-2'>
                <h5 className='font-bold text-2xl'>{doctor.name}</h5>
                <p className='font-medium text-lg opacity-60'>{doctor.education} - {doctor.speciality}</p>
            </div>
            <div className="w-full h-px my-3 bg-[repeating-linear-gradient(to_right,#0F0F0F30_0,#0F0F0F30_8px,transparent_8px,transparent_16px)]"></div>
            <div className='flex justify-center items-center gap-2 mb-3'>
                <span className='border opacity-70 rounded-full text-xs px-1'>R</span>
                <p className='font-medium text-lg opacity-70'>Reg No: {doctor.registration_number}</p>
            </div>
            <Link to={`/details/${doctor.id}`}>
                <button className="btn btn-outline w-full text-center rounded-3xl border-[#176AE5] font-semibold text-xl text-[#176AE5] hover:bg-[#176AE5] hover:text-white">View Details</button>
            </Link>
        </div>
    );
};

export default Doctor;
