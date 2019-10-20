import React, { Component } from 'react';
import FormInput from '../FormInput/Forminput';
import CustomButton from '../../components/Custombutton/Cusstombutton';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import bn from '../../Utils/bemnames';
const bem =bn.create('signup'); 



export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email : '',
            passwort : '',
            confirmpasswort :''
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.HanleSubmit = this.HanleSubmit.bind(this);
    }
    async HanleSubmit(evt){
      evt.preventDefault();
      const {displayName,email,passwort,confirmpasswort}= this.state;
      if(passwort === confirmpasswort){
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email,passwort);
          await createUserProfileDocument(user,{displayName});
          this.setState({
            displayName:'',
            email : '',
            passwort : '',
            confirmpasswort :''
          });
        }catch(error){
          console.log('error creating signup', error.message); 
        }
      
      }else{
        alert("پسورد را مجددا وارد نماييد");
        return;
      }
   }
    handleOnChange(evt){
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }
    render() {
        const {displayName,email,passwort,confirmpasswort}= this.state;
        return (
            <div className={bem.b('signin')}>
               <h2>signuod data</h2>  
               <span>enter registeration data</span>
               <form onSubmit={this.HanleSubmit} className = {bem.e('form')}>
                  <FormInput 
                    type ={'text'}
                    name={'displayName'}
                    handleChange = {this.handleOnChange}
                    value = {displayName}
                    Lable= {'نام كاربري'}
                    required
                  /> 
                  <FormInput 
                    type ={'email'}
                    name={'email'}
                    handleChange = {this.handleOnChange}
                    value = {email}
                    Lable= {'ايميل'}
                    required
                  />
                   <FormInput 
                    type ={'passwort'}
                    name={'passwort'}
                    handleChange = {this.handleOnChange}
                    value = {passwort}
                    Lable= {'رمز ورود'}
                    required
                  /> 
                   <FormInput 
                    type ={'passwort'}
                    name={'confirmpasswort'}
                    handleChange = {this.handleOnChange}
                    value = {confirmpasswort}
                    Lable= {'تكرار رمز ورود'}
                    required
                  /> 
                    <CustomButton type='submit'>sign up</CustomButton>
               </form>
            </div>
        )
    }
}

