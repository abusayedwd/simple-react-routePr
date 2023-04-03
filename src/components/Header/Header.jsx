import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActivLink from '../ActivLink/ActivLink';
const Header = () => {
        return (
                <nav>
                        <ActivLink to="/">defualt</ActivLink>
                        <ActivLink to = "/friend">Friend</ ActivLink>
                        <ActivLink to = "/post">Post</ActivLink>
                        <ActivLink to="/about">About</ActivLink>
                        <ActivLink to="/contact">Contact</ActivLink>
                        
                </nav>
        );
};

export default Header;