import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
        const detail = useLoaderData()
        // console.log(detail)
        const navigate = useNavigate()
        const detailBack = () => {
                navigate(-1)
        }
        return (
                <div>
                        <h3>Everything all details show</h3>
                        <h1> name : {detail.name} </h1>
                        <p> phone : {detail.phone}</p>
                        <small>email: {detail.email}</small> <br />
                        <button onClick={detailBack}>Back</button>

                </div>
        );
};

export default FriendDetail;