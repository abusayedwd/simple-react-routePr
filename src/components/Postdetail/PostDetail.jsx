import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
        const postDetail = useLoaderData()
        // console.log(postDetail)
        const navigate = useNavigate()
        const backHandler = () => {
                navigate(-1)
        }
        return (
                <div>
                        <h2>show our all post details</h2>
                        <h1>ID: {postDetail.id}</h1>
                        <h2>{postDetail.title.slice(0,30)}</h2>
                        <p>{postDetail.body.slice(0,40)}</p>
                        <button onClick={backHandler}>go back</button>
                </div>
        );
};

export default PostDetail;