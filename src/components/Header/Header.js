import React, { Component } from 'react';
import bn from '../../Utils/bemnames';
import {ReactComponent as Logo } from '../../images/crown.svg';

const bem = bn.create('header');
export default class Header extends Component {
    render() {
        return (
            <div className={bem.b('header')}>
                <div className ={bem.e('login-wrapper')}>
                    <button ><span>سبد خريد</span></button> 
                    <div className = {bem.e('loginr')}>
                        <a href="#"><span>ورود/ثبت نام</span></a>
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
    }
}
