import React from 'react';
import {NavLink} from 'react-router-dom';

const SideToolbar =props=>(
       <nav className = "sidetoolbar">
        <NavLink exact activeClassName ="link-active" to ='/' >مراقبت پوست</NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >مراقبت مو</NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >آرايش ارگانيك</NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >ابزار ها  و وسايل جانبي</NavLink>
      </nav>
);
export default SideToolbar;