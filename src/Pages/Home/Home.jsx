import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router-dom';
import Success from '../../Components/Success/Success';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Doctors data = {data}></Doctors>
            <Success></Success>

        </div>
    );
};

export default Home;