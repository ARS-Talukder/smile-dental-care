import React from 'react';
import './ServiceDescription.css'

const ServiceDescription = () => {
    return (
        <div className='mx-auto' style={{ width: '98%' }}>
            <h2 className='text-warning fw-bold mt-2'>Know About Treatment</h2>
            <div className='know-container'>
                <div className='know-container-mini'>
                    <h5>Tooth Extraction</h5>
                    <p>Tooth extraction is performed by a dentist or oral surgeon and is a relatively quick outpatient procedure with either local, general, intravenous anesthesia, or a combination. Removing visible teeth is a simple extraction. Teeth that are broken, below the surface, or impacted require a more involved procedure.</p>
                </div>
                <div className='know-container-mini'>
                    <h5>Scaling</h5>
                    <p>Scaling is when your dentist removes all the plaque and tartar (hardened plaque) above and below the gumline, making sure to clean all the way down to the bottom of the pocket. Your dentist will then begin root planing, smoothing out your teeth roots to help your gums reattach to your teeth.</p>
                </div>
                <div className='know-container-mini'>
                    <h5>False Teeth</h5>
                    <p>Dentures — also commonly known as false teeth — are fitted to act as a prosthesis for missing teeth. They’re often made of acrylic, nylon, or metal. They can be used in place of one tooth, several, or all of your teeth, and they fit snugly over the gums.

                        Properly fitted dentures have numerous benefits, including improving speech, eating capabilities, and your self-confidence. It can also help to prevent your face from sagging over time and may offer protection to your remaining teeth.</p>
                </div>
            </div>


        </div>
    );
};

export default ServiceDescription;