import React, { Component } from 'react';
import FormInput from '../FormInput/Forminput';
import CustomButton from '../../components/Custombutton/Cusstombutton';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';
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
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    async HandleSubmit(evt){
        evt.preventDefault();
        const {email,passwort}= this.state;
        try{
           await auth.signInWithEmailAndPassword(email,passwort);
            this.setState({
                email : '',
                passwort : ''
            });
        }catch(error){
            console.log('error creating signup', error.message); 
        }
       

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
               <form onSubmit={this.HandleSubmit} className = {bem.e('form')}>
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
