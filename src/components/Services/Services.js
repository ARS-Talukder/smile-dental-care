import React from 'react';
import './Services.css';
import service1 from '../../images/Service/service-1.jpg';
import service2 from '../../images/Service/service-2.jpg';
import service3 from '../../images/Service/service-3.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { id: 12345, name: 'Extraction', price: 1500, image: service1, desc: 'I will take a long time to remove tooth. So, No reason to worry for this treatment' },
        { id: 12346, name: 'Scaling', price: 3500, image: service2, desc: 'My Scaling is too good. Every single of mark will be cleaned from your teeth' },
        { id: 12347, name: 'False Teeth', price: 25500, image: service3, desc: 'It will be adjusted very smoothly. It will look like realistic' }
    ]
    return (
        <div id='services'>
            <h2 className='text-warning fw-bold mt-2'>My Services</h2>
            {
                services.map(service => <Service key={service.id} service={service} ></Service>)
            }
        </div>
    );
};

export default Services;