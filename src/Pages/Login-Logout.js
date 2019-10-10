import React from 'react';
import bn from '../Utils/bemnames';
import Signin from '../components/Signin/Signin';

const bem =bn.create('signin_page');
const LoginLogoutPage = props=>(
   <div className={bem.b('signin_page')}>
      <Signin />
   </div>
);
export default LoginLogoutPage;
