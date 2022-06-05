import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ServiceDescription from '../ServiceDescription/ServiceDescription';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-primary fw-bold'>Smile Dental <span className='text-danger'>Care</span> </h1>
            <Banner></Banner>
            <Services></Services>
            <ServiceDescription></ServiceDescription>
            <Footer></Footer>
        </div>
    );
};

export default Home;