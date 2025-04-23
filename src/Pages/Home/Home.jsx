import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Success from '../../Components/Success/Success';

const Home = () => {
    const data = useLoaderData();

    if (!data) {
        return (

            <span className="loading loading-dots loading-lg text-[#176AE5]"></span>

        );
    }

    return (
        <div>
            <Banner />
            <Doctors data={data} />
            <Success />
        </div>
    );
};

export default Home;
