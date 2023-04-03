import React from 'react';
import { NavLink } from "react-router-dom";
import './ActivLink.css'

const ActivLink = ({to,children}) => {
        return (
               

<NavLink
  to= {to}
  className={({ isActive }) =>  isActive ? "active" : "" }
>
  {children}
</NavLink>
         
        )
};

export default ActivLink;