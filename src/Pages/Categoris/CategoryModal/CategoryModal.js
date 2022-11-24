import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const CategoryModal = ({orderBike, setOrderBike}) => {
    const {user} = useContext(AuthContext);
    const {  name, img, resale_price, _id} = orderBike;
    const handlerBileBooked=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const mobileNumber = form.userNumber.value;
        const meetLocation = form.UserMeetLocation.value;
        const bookedProduct ={
            productId:_id,
            name,
            email,
            productName,
            productPrice,
            mobileNumber,
            meetLocation,
            productImg: img
        }
        console.log(bookedProduct)

        fetch('http://localhost:5000/bookedProduct',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookedProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            toast.success('Boooked successfull!!')
            form.reset();
            setOrderBike(null)
        })
     




    }
    return (
        <div>
          
            <input type="checkbox" id="CategoryModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="CategoryModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handlerBileBooked} className='grid grid-cols-1 gap-3 p-3'>
                <input type="text" name='name' disabled defaultValue={user?.displayName} className="input input-bordered w-full" />
                <input type="email" name='email' disabled defaultValue={user?.email}  className="input input-bordered w-full" />
                <input type="text" name='productName' disabled defaultValue={name} className="input input-bordered w-full" />
                <input type="text" name='productPrice' disabled defaultValue={resale_price} className="input input-bordered w-full" />
                <input type="text" required name='userNumber' placeholder='type your phone number' className="input input-bordered w-full" />
                <input type="text" required name='UserMeetLocation' placeholder='meeting location'  className="input input-bordered w-full" />
                <input type="submit" className='btn bg-orange-500' value='confrom booked' />
                </form>
            </div>
            </div>
        </div>
    );
};

export default CategoryModal;