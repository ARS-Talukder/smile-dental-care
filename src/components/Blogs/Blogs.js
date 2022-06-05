import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-1: What is the difference between Authentication and Authorization?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-1 : 1.Authentication is the process of verifying who someone is and Authorization is the process of verifying what specific applications, files, and data a user has access to.</h5>
                <h5 className='text-start text-warning fw-bold'>2. Authentication is used to verify that users really are who they represent themselves to be and Authorization is used to grant the user permission to access different levels of information and perform specific functions.</h5>
            </div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-2: Why are you using firebase? What is the other options do you have besides ?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-2 : 1. Firebase gives us undeniable insight into user behavior. We can use this knowledge to make informed decisions about how to market our website better and to reach out to the audiences that we want to target.</h5>
                <h5 className='text-start text-success fw-bold'>2. Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript are the alternative options of firebase.</h5>
            </div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-3: What other services does firebase provide other than Authentication?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-3 : Hosting, Google Analytics, Cloud Fire store, Cloud Functions, Cloud Storage, Predictions, Cloud Messaging, Dynamic Links, Remote Config are the other services firebase provides. </h5>

            </div>
        </div>
    );
};

export default Blogs;