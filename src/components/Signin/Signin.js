import React, { Component } from 'react';
import FormInput from '../FormInput/Forminput';
import CustomButton from '../../components/Custombutton/Cusstombutton';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import bn from '../../Utils/bemnames';
const bem =bn.create('signin'); 



export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            email : '',
            passwort : ''
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.HanleSubmit = this.HanleSubmit.bind(this);
    }
    HanleSubmit(evt){
        evt.preventDefault();
        this.setState({
            email : '',
            passwort : ''
        });

    }
    handleOnChange(evt){
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className={bem.b('signin')}>
               <h1>email</h1>  
               <span>enter data</span>
               <form onSubmit={this.HanleSubmit} className = {bem.e('form')}>
                  <FormInput 
                    type ={'email'}
                    name={'email'}
                    handleChange = {this.handleOnChange}
                    value = {this.state.email}
                    Lable= {'ايميل'}
                    required
                  /> 
                  <FormInput 
                    type ={'passwort'}
                    name={'passwort'}
                    handleChange = {this.handleOnChange}
                    value = {this.state.passwort}
                    Lable= {'رمز ورود'}
                    required
                  /> 
                  <div className ={bem.e('btn-container')}>
                    <CustomButton type='submit'>sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >sign With Google</CustomButton>
                  </div>
                  
               </form>
            </div>
        )
    }
}
