import React from 'react';
import CountUp from 'react-countup';
import success1 from '../../assets/images/success-doctor.png';
import success2 from '../../assets/images/success-review.png';
import success3 from '../../assets/images/success-patients.png';
import success4 from '../../assets/images/success-staffs.png';

const Success = () => {
    return (
        <div className='max-w-7xl mx-auto text-center py-6 mb-4'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <h3 className='font-extrabold text-4xl'>We Provide Best Medical Services</h3>
                <p className='opacity-80 text-lg'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                <div className='bg-white shadow-xl rounded-2xl space-y-4 py-10 text-center'>
                    <img className='mx-auto' src={success1} alt="" />
                    <h1 className='font-bold text-5xl'>
                        <CountUp end={199} duration={4} />+
                    </h1>
                    <p className='font-medium text-xl opacity-60'>Total Doctors</p>
                </div>
                <div className='bg-white shadow-xl rounded-2xl space-y-4 py-10 text-center'>
                    <img className='mx-auto' src={success2} alt="" />
                    <h1 className='font-bold text-5xl'>
                        <CountUp end={467} duration={4.5} />+
                    </h1>
                    <p className='font-medium text-xl opacity-60'>Total Reviews</p>
                </div>
                <div className='bg-white shadow-xl rounded-2xl space-y-4 py-10 text-center'>
                    <img className='mx-auto' src={success3} alt="" />
                    <h1 className='font-bold text-5xl'>
                        <CountUp end={1900} duration={5} />+
                    </h1>
                    <p className='font-medium text-xl opacity-60'>Total Patients</p>
                </div>
                <div className='bg-white shadow-xl rounded-2xl space-y-4 py-10 text-center'>
                    <img className='mx-auto' src={success4} alt="" />
                    <h1 className='font-bold text-5xl'>
                        <CountUp end={300} duration={4.5} />+
                    </h1>
                    <p className='font-medium text-xl opacity-60'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;
