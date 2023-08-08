import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'
import { toast } from 'react-hot-toast';

const Details = () => {

    const data = useLoaderData()


    const [booking, setBooking] = useState('')
    console.log(booking);

    const bookingHandle = () => {
        const name = data.name;
        const language = data.language;
        const img = data.image.original

        const bookingData = {
            name,
            language,
            img
        }
        console.log(bookingData);
        setBooking([...booking, bookingData]);
        localStorage.setItem('booking',JSON.stringify(...booking, bookingData));
        toast.success('Booking successfully')
    };      

    const text = data.summary;
    const regex = /(<([^>]+)>)/ig;
    const result = text.replace(regex, "");

    return (
        <div class="card">
            <img className='image' src={data?.image?.original} alt="" />
            <h4>Name: {data?.name}</h4>
            <h4>Language: {data?.language}</h4>
            <p className='summary'>Summary : {result}</p>
            <p><button onClick={bookingHandle}>BOOKING</button></p>
        </div>
    );
};

export default Details;

