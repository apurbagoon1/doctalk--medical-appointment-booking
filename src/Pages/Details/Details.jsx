import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { BsPatchExclamation } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { id } = useParams();
    const docId = parseInt(id);
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.id === docId);
    const navigate = useNavigate();

    const todayName = new Date().toLocaleString('en-us', { weekday: 'long' });
    const isAvailableToday = singleDoctor.availability.includes(todayName);

    const handleBookedDoctor = (id, name) => {
        const bookedDoctorData = JSON.parse(localStorage.getItem("bookList")) || [];
        if (bookedDoctorData.includes(id)) {
            toast.warning(`You have already booked ${name}!`, {
                style: { 
                    width: "400px", 
                    padding: "16px",
                    fontSize: "16px",
                    borderRadius: "12px"
                }
            });
        } 
        else {
            bookedDoctorData.push(id);
            localStorage.setItem("bookList", JSON.stringify(bookedDoctorData));
            toast.success(`Appointment with ${name} booked successfully!`, {
                style: { 
                    width: "500px", 
                    padding: "16px",
                    fontSize: "16px",
                    borderRadius: "12px"
                }
            });

            setTimeout(() => {
                navigate('/bookList');
            }, 500); 
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='space-y-4 bg-white rounded-2xl text-center py-10 my-5'>
                <h3 className='font-extrabold text-3xl'>Doctor’s Profile Details</h3>
                <p className='opacity-70 w-4/5 mx-auto'>
                    Explore detailed information about each doctor, including their educational background, area of specialization, years of experience, current workplace, consultation fees, and available days for appointments. This profile helps you make informed
                    decisions when selecting the right healthcare professional for your specific medical needs.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-8 bg-white rounded-2xl p-12 my-6">
                <div>
                    <img className='rounded-xl h-88 object-cover' src={singleDoctor.image} alt="" />
                </div>
                <div className='col-span-2 py-2'>
                    <h3 className='font-bold text-3xl mb-4'>{singleDoctor.name}</h3>
                    <p className='font-medium text-lg opacity-60 mb-1'>{singleDoctor.education}</p>
                    <p className='font-medium text-lg opacity-60 mb-4'>{singleDoctor.designation}</p>
                    <p className='font-medium text-lg opacity-60 mb-1'>Working at</p>
                    <h5 className='font-bold text-xl mb-4'>{singleDoctor.workplace}</h5>
                    <div className="w-full my-3 border-b border-dashed border-[#0F0F0F30]"></div>
                    <div className='flex items-center gap-2 mb-3'>
                        <span className='border opacity-70 rounded-full text-xs font-medium px-1'>R</span>
                        <p className='font-medium text-lg opacity-70'>Reg No: {singleDoctor.registration_number}</p>
                    </div>
                    <div className="w-full my-3 border-b border-dashed border-[#0F0F0F30]"></div>
                    <div className="mt-4 mb-2 flex items-center gap-3">
                        <p className="font-semibold text-lg">Availability</p>
                        <div className="flex gap-2 overflow-auto">
                            {singleDoctor.availability.map((day, index) => (
                                <span
                                    key={index}
                                    className="bg-[#FFA00020] border border-[#FFA00030] text-[#FFA000] text-sm px-3 py-1 rounded-2xl font-medium"
                                >
                                    {day}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className='font-bold text-lg'>Consultation Fee: <span className='text-[#176AE5]'>{singleDoctor.fee} Per Consultation</span> <span className='opacity-50 font-semibold'>(incl. Vat)</span></p>
                </div>
            </div>

            <div className='bg-white rounded-2xl py-12 px-10 my-6'>
                <h3 className='font-bold text-2xl text-center'>Book an Appointment</h3>
                <div className="w-full my-4 border-b border-dashed border-[#0F0F0F30]"></div>

                <div className='flex items-center justify-between mb-4'>
                    <p className='font-bold text-lg'>Availability</p>
                    {isAvailableToday ? (
                        <span className="font-medium text-sm text-[#09982F] bg-[#09982F20] border border-[#09982F30] rounded-4xl py-1.5 px-3">
                            {singleDoctor.name} Available Today.
                        </span>
                    ) : (
                        <span className="bg-[#FF000020] border border-[#FF000030] text-[#FF0000] text-sm px-3 py-1.5 rounded-2xl font-medium">
                            {singleDoctor.name} Currently Unavailable!
                        </span>
                    )}
                </div>

                <div className="w-full my-4 border-b border-[#0F0F0F30]"></div>

                {isAvailableToday ? (
                    <span className='bg-[#FFA00020] border border-[#FFA00030] text-[#FFA000] text-sm px-3 py-1.5 rounded-2xl font-medium inline-flex items-center gap-1'>
                        <BsPatchExclamation />
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </span>
                ) : (
                    <span className='bg-[#FF000020] border border-[#FF000030] text-[#FF0000] text-sm px-3 py-1.5 rounded-2xl font-medium inline-flex items-center gap-1'>
                        <BsPatchExclamation />
                        This doctor is not available today. Please book an appointment for a later date. Thank you for your understanding.
                    </span>
                )}

                <button
                    onClick={() => handleBookedDoctor(docId, singleDoctor.name)}
                    className='btn btn-primary w-full font-medium text-lg py-5 bg-[#176AE5] text-[#FFFFFF] rounded-3xl mt-6'
                >
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default Details;
