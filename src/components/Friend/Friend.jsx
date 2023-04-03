import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
        // console.log(friend)
        const {name, id , email, phone} = friend;
        return (
                <div className='friend'>
                       <h2>{name}</h2>
                       <p>email:{email}</p>
                       <p>phone: {phone}</p> 
                        <p><Link to ={`/detail/${id}`}>show detail</Link></p>
                 </div>
        );
};

export default Friend;