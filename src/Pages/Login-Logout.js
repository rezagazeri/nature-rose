import React from 'react';
import bn from '../Utils/bemnames';

const bem =bn.create('signin_page');
const LoginLogoutPage = props=>(
   <div className={bem.b('signin_page')}>
      <h2>signin page</h2>
   </div>
);
export default LoginLogoutPage;
