import React from 'react';
import bn from '../../../Utils/bemnames';
const bem = bn.create('card');
const Pricecard = props=>(
 <div className={bem.e('price')}>
 {/* TODO : درست كردن استايل اين قسمت در فايل SASS */}
    <h3 > خاك رس صورتي </h3>
    <span>تومان</span>
    <span>35000</span>
    <span>تخفيف</span>
    <footer className={bem.e('footer')}>
         <button>افزودن به سبد خريد</button>
     </footer >
</div>
     
);

export default Pricecard;