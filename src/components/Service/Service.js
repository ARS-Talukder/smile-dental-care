import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, price, image, desc } = props.service
    return (
        <div className='w-50 border mx-auto my-3 p-2 border-warning'>

            <img src={image} width={200} alt="" />
            <h4 className='text-warning fw-bold'>{name}</h4>
            <h5 className='text-danger'>Price: {price} BDT</h5>
            <h6 className='text-success'>Description: {desc}</h6>
            <button className='btn btn-primary checkout-btn'><Link to='/checkout'>Check Out</Link></button>


        </div>
    );
};

export default Service;