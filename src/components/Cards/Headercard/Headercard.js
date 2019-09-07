import React from 'react';
import bn from '../../../Utils/bemnames';
import pic from '../../../images/discount.svg';
const bem = bn.create('card');
const CardHeader = props=>(
     <header className={bem.e('header')}>
        <div className={bem.e('h-img')}>
            <div style={{
            backgroundImage: `url(${pic})`
            }} />
           <span>Off</span>
        </div>
        <div className={bem.e('h-ersal')}>ارسال رايگان</div>
        <div className={bem.e('h-persent')}>
          <span>تخفيف %</span>
          <span>15</span>
        </div>
     </header>
     
);


export default CardHeader;