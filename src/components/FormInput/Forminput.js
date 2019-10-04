import React from 'react';
import bn from '../../Utils/bemnames';

const bem =bn.create('forminput');
const FormInput = props=>(
   <div className={bem.b('forminput')}>
      <input />
   </div>
);
export default FormInput;