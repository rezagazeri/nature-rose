import React from 'react';
import bn from '../../Utils/bemnames';
const bem =bn.create('g-input');
const FormInput = ({Lable,handleChange,...otherProps})=>(
   <div className={bem.b('g-input')}>
        {Lable ?(<label
        className={`${otherProps.value.length ? 'shrink' : ''} ${bem.e('f-lable')}`}
      > {Lable} </label>):null}
      <input className={bem.e('f-input')} onChange={handleChange} {...otherProps} />
   </div>
);
export default FormInput;