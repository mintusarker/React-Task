import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [booking, setBooking] = useState([])
    console.log(booking);

    useEffect(() => {
        const data = localStorage.getItem('booking');
        if (data) {
            setBooking(JSON.parse(data))
        }
        else {
            setBooking('')
        }
    }, [])

    return (
        <div>
            <h2>Booking List details</h2>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Booked</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <img className='img' src={booking?.img} alt="" /> </td>
                        <td>{booking?.name}</td>
                        <td>{booking?.language}</td>
                        <td> <button className='btn'>Booked</button> </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default BookingList;
