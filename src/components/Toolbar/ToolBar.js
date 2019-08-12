
import React from 'react';
import {NavLink} from 'react-router-dom';
import HumbergerButton from '../SideToolbar/HumbergerButton';

const ToolBar = props=>(
   <header className="nature-nav"> 
      <HumbergerButton />
      <nav className = "nature-nav__menu">
        <NavLink exact activeClassName ="link-active" to ='/' >مراقبت پوست</NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >مراقبت مو </NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >آرايش ارگانيك</NavLink>
        <NavLink exact activeClassName ="link-active" to ='/' >ابزار ها  و وسايل جانبي</NavLink>

      </nav>
      <div className ="spacer"/>
      <div className="nature-nav__suggest">
          <span>`پيشنهاد ويژه</span>
      </div>
   </header> 
);
export default ToolBar;