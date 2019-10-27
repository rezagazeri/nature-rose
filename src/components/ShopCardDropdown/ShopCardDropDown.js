import React from 'react';
import CustomButton from '../Custombutton/Cusstombutton';
import bn from '../../Utils/bemnames';

const bem = bn.create('shopcarditems');

const ShopCardDropDown = ()=> {
    return (
        <div className={bem.b('shopcarditems')}  >
           <ul>
               <li></li>
           </ul> 
           <div className={bem.e('btn-container')}>
               <CustomButton>تكميل خريد</CustomButton>
               <CustomButton>ادامه خريد</CustomButton>
           </div>
        </div>
    );
};

export default ShopCardDropDown;