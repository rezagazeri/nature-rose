
import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import HumbergerButton from '../SideToolbar/HumbergerButton';
const ToolBar = props=>(
   <header className="nature-nav"> 
      <HumbergerButton />
      <nav className='navigation'>
         <ul >
            <li ><NavLink exact activeClassName ="link-active" to ='/' >مراقبت پوست
                <div className="navigation__container">
                  <Link to="/" className="navigation__pust">پاكسازي و لايه برداري</Link>
                  <ul className="navigation__mask">
                     <li><Link to='/' className="navigation__link">ماسك خاك رس صورتي</Link></li>
                     <li><Link to='/'className="navigation__link" >ماسك خاك رس سبز</Link></li>
                     <li><Link to='/'className="navigation__link">ماسك خاك رس سفيد</Link></li>
                     <li><Link to='/'className="navigation__link">ماسك خاك رس سياه</Link></li>
                     <li><Link to='/' className="navigation__link ">پكيج ميني رس 4 رنگ </Link></li>
                     <li><Link to='/' className="navigation__link">ماسك peel-off</Link></li>
                   </ul>
                 </div>
               </NavLink>
            </li>

             



               <li><NavLink exact activeClassName ="link-active" to ='/' >مراقبت مو </NavLink></li>
               <li><NavLink exact activeClassName ="link-active" to ='/' >آرايش ارگانيك</NavLink></li>
               <li><NavLink exact activeClassName ="link-active" to ='/' >ابزار ها  و وسايل جانبي</NavLink></li>
           </ul>
      </nav>
      <div className ="spacer"/>
      <div className="nature-nav__suggest">
          <span>`پيشنهاد ويژه</span>
      </div>
   </header> 
);
export default ToolBar;