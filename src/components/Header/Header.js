import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../images/crown.svg';
import bn from '../../Utils/bemnames';

const bem = bn.create('header');
const Header = ({currentuser})=>(
   
            <div className={bem.b('header')}>
                <div className ={bem.e('login-wrapper')}>
                    <button ><span>سبد خريد</span></button> 
                    <div className = {bem.e('loginr')}>
                         {
                             currentuser?<div onClick={()=>auth.signOut()}>خروج</div>: 
                             <Link to='/signin' ><span>ورود/ثبت نام</span></Link>
                         }
           
                    </div>  
                </div>
                <div className={bem.e('search-wrapper')}>
                    <form>
                        <input  type="text" placeholder="محصول مورد نظرتان را جستجو كنيد .." />
                        <button ><span>search</span></button> 
                    </form>
                    <a href="#">
                        <Logo  className={bem.e('img')} />
                    </a>
                </div>
            </div>
        )
export default Header;
