import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBookedDoctor } from '../../utilities/addToDB';
import NoApoinment from '../../assets/images/No-appoinment.jpg';

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const bookedDoctorData = getBookedDoctor();
        const convertedBookedDoctors = bookedDoctorData.map(id => parseInt(id));
        const myBookList = data.filter(doctor => convertedBookedDoctors.includes(doctor.id));
        setBookList(myBookList);
    }, [data]);

    const handleCancelAppointment = (id, name) => {
        const bookedDoctorData = JSON.parse(localStorage.getItem("bookList")) || [];
        const updatedData = bookedDoctorData.filter(docId => docId !== id);
        localStorage.setItem("bookList", JSON.stringify(updatedData));
        setBookList(prev => prev.filter(doc => doc.id !== id));
        toast.info(`Appointment with ${name} cancelled successfully!`, {
            style: { 
                width: "500px", 
                padding: "16px",
                fontSize: "16px",
                borderRadius: "12px"
            }
        });
    }; 

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='space-y-4 text-center py-5 my-5'>
                <h3 className='font-extrabold text-3xl'>My Today Appointments</h3>
                <p className='opacity-70 w-4/5 mx-auto'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>
            </div>
            {bookList.length === 0 ? (
                <div className='bg-white rounded-2xl shadow-lg p-10 text-center flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto my-8'>
                    <img
                        src={NoApoinment}
                        alt="No Appointment"
                        className="max-w-xl mx-auto"
                    />
                    <h4 className='text-2xl font-bold opacity-80'>No Appointments Booked!</h4>
                    <p className='opacity-70 text-lg max-w-2xl'>
                        Looks like you haven’t booked any appointments today. Browse doctors, check their availability, and book a consultation in just a few clicks.
                    </p>

                    <NavLink to={'/'}> <button className='btn btn-primary font-medium text-lg px-6 py-5 bg-[#176AE5] text-[#FFFFFF] rounded-3xl'>
                        Book a Doctor Now
                    </button></NavLink>
                </div>
            ) : (
                <div className='space-y-6 mb-10'>
                    {bookList.map((doc) => (
                        <div key={doc.id} className='bg-white rounded-2xl shadow-md p-6 space-y-3'>
                            <h4 className='text-xl font-bold'>{doc.name}</h4>
                            <div className="flex items-center justify-between">
                                <p className='text-lg font-medium opacity-60'>{doc.education} - {doc.speciality}</p>
                                <p className='text-lg font-medium opacity-60'>Appointment Fee: <span className='text-[#176AE5]'>{doc.fee}</span> + Vat</p>
                            </div>
                            <div className="w-full my-3 border-b border-dashed border-[#0F0F0F30]"></div>
                            <button
                                onClick={() => handleCancelAppointment(doc.id, doc.name)}
                                className='btn btn-outline btn-secondary text-lg border-2 w-full mt-2 py-3 rounded-3xl font-semibold'>
                                Cancel Appointment
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;
