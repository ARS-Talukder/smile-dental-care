import React from 'react';
import './About.css';
import myPic from '../../images/About/Myself.jpg';

const About = () => {
    return (
        <div>
            <img src={myPic} width={300} alt="" />
            <div>
                <h3 className='text-danger fw-bold'>I am ARS Talukder</h3>
                <h5 className='bg-warning w-75 mx-auto p-3 rounded-lg'>My dream is to be a Full Stack Web Developer. I am preparing myself to be that. I am learning all the items what is needed to. I am ready to do any type of hard word to achieve my goal. I spend my maximum time with google and w3school.com. And I will do it forever. My dream is everything to me</h5>

            </div>
        </div>
    );
};

export default About;