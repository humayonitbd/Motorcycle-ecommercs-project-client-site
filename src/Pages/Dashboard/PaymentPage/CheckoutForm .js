import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm  = ({paymentProduct}) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('')
    const [proccessing, setProccessing] = useState(false)
    const navigete = useNavigate();
    const {productPrice, productName, email, _id, productId} = paymentProduct;
    console.log(productId, productName)
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({ productPrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [productPrice]);
    

    const handleSubmit= async(e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            setCardError(error.message);

        }else{
            setCardError('')
        }
        setProccessing(true)
        const {paymentIntent, error:confromError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: productName,
                  email: email
                },
              },
            },
          );
          if(confromError){
            setCardError(confromError.message)
            return;
          }
          if(paymentIntent.status === 'succeeded'){
            
            const payment = {
                productPrice,
                transactionId: paymentIntent.id,
                email,
                orderId: _id,
                productId,
                productName

            }
        console.log(payment)
            fetch('http://localhost:5000/payments',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)

            })
            .then(res =>res.json())
            .then(data =>{
                if(data.insertedId){
                    setTransactionId(paymentIntent.id)
                    toast.success('Congrats ! your payment successfull');
                    navigete('/dashboard/myorders')
                }
                
            })
           
          }
          setProccessing(false);
          console.log('payment message',paymentIntent)

    }
    return (
        <form className='w-1/2 mx-auto bg-slate-200 p-3 mt-5 rounded' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='w-full border-none  bg-orange-500 btn mt-5' disabled={!stripe || !clientSecret || proccessing}>
        Pay
      </button>
      <p className='text-orange-500'>{cardError}</p>

      {transactionId && <p className='text-orange-500'>TransactionId: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm ;