import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectHiddenShowDW} from '../../Redux/Card/Cardselectors';
import {selectcurrentUser} from '../../Redux/user/Userselector';
import Shopcardicon from '../ShopCardIcon/Shopcardicon';
import ShopCardDropDown from '../ShopCardDropdown/ShopCardDropDown';
import {ReactComponent as Logo } from '../../images/crown.svg';
import bn from '../../Utils/bemnames';

const bem = bn.create('header');
const Header = ({currentUser,Hidden_Show_DW })=>(
   
            <div className={bem.b('header')}>
                <div className ={bem.e('login-wrapper')}>
                    <Shopcardicon />
                    <div className = {bem.e('loginr')}>
                         {
                             currentUser?<div onClick={()=>auth.signOut()}>خروج</div>: 
                             <Link to='/signin'><span>ورود/ثبت نام</span></Link>
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
                {
                    Hidden_Show_DW  ? null: <ShopCardDropDown />//hidden and show shopdropdown
                }
               
            </div>
        )
//روش ديستراكچر 
const mapStateToProps = createStructuredSelector({
    currentUser:selectcurrentUser,
    Hidden_Show_DW :selectHiddenShowDW
});        
export default connect(mapStateToProps)(Header);
