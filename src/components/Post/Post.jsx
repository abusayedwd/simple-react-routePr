import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
        // console.log(post)
        const navigate = useNavigate()
        const {id, body, title} = post;
        const handlePostDetail = () => {
                navigate(`/posts/${id}`)
        }
        return (
                <div className='post'>
                        <h2>ID: {id}</h2>
                        <p>{title}</p>
                        <p>{body.slice(0, 40)}</p>
                        <Link to = {`/posts/${id}`}>show post details</Link>
                         <button onClick={handlePostDetail}>show post De: with btn</button>
                     <p></p>   
                </div>
        );
};

export default Post;