import React from 'react';
import bn from '../Utils/bemnames';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';


const bem =bn.create('signin_page');
const LoginLogoutPage = props=>(
   <div className={bem.b('signin_page')}>
      <Signin />
      <Signup />
   </div>
);
export default LoginLogoutPage;



