import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
        const detail = useLoaderData()
        // console.log(detail)
        return (
                <div>
                        <h3>Everything all details show</h3>
                        <h1> name : {detail.name} </h1>
                        <p> phone : {detail.phone}</p>
                        <small>email: {detail.email}</small>

                </div>
        );
};

export default FriendDetail;