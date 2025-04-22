import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
    const [showAllDoctors, setShowAllDoctors] = useState(false);

    const handleViewAllDoctors = () => {
        setShowAllDoctors(true);
    };

    const displayedDoctors = showAllDoctors ? data : data.slice(0, 6);

    return (
        <div className='max-w-7xl mx-auto text-center py-10'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <h3 className='font-extrabold text-4xl'>Our Best Doctors</h3>
                <p className='opacity-80 text-lg'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <Suspense fallback={<span>loading....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6'>
                    {
                        displayedDoctors.map((doctor) => (
                            <Doctor key={doctor.registration_number} doctor={doctor} />
                        ))
                    }
                </div>
            </Suspense>

            {
                !showAllDoctors && (
                    <button onClick={handleViewAllDoctors}
                        className='btn btn-primary font-medium text-lg px-5 bg-[#176AE5] text-[#FFFFFF] rounded-3xl'>
                        View All Doctors
                    </button>
                )
            }
        </div>
    );
};

export default Doctors;
