import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm ';


const stripePromise = loadStripe(process.env.REACT_APP_STRIP_KEY);
const PaymentPage = () => {
    const paymentProduct = useLoaderData();
    return (
        <div>
            <div><h3 className='text-center text-3xl text-orange-500 font-bold my-5'>Payment Product</h3></div>
            <div className='flex justify-center'>
                <h3 className='mr-5'>Product Name: <strong>{paymentProduct.productName}</strong></h3>
                <h3>ProductPrice: <strong>${paymentProduct.productPrice}</strong></h3>
            </div>
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm  paymentProduct={paymentProduct}/>
            </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;