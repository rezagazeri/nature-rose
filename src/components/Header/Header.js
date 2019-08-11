import React, { Component } from 'react'
import logo from '../../images/logo.gif'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className ="header__login-wrapper">
                    <button ><span>سبد خريد</span></button> 
                    <div className = "header__login">
                        <a href="#"><span>ورود/ثبت نام</span></a>
                    </div>  
                </div>
                <div className="header__search-wrapper">
                    <form>
                        <input  type="text" placeholder="محصول مورد نظرتان را جستجو كنيد .." />
                        <button ><span>search</span></button> 
                    </form>
                    <a href="#">
                        <img  className="header__img" src={logo} />
                    </a>
                </div>
            </div>
        )
    }
}
