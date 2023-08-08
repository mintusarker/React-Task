import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Data.css'

const Data = () => {

    const [allData, setAllData] = useState([])

    console.log(allData);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return (
        <div>
            <h2>Data</h2>
            <div>
                <table id='customers'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map(data =>
                                // console.log(data.show.id)
                                <tr>
                                    <td> <img className='img' src={data?.show?.image?.original} alt="" /> </td>
                                    <td>{data.show.name}</td>
                                    <td>{data.show.language}</td>
                                    <td><Link  to={`/details/${data?.show?.id}`}><button className='btn'>Detail</button> </Link></td>

                                </tr>

                            )
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default Data;