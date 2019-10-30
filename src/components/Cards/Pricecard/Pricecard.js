import React from 'react';
import {connect} from 'react-redux';
import {AddCardItem} from '../../../Redux/Card/CardAction';
import bn from '../../../Utils/bemnames';
const bem = bn.create('card');
const Pricecard = ({item,AddToShopcard})=>(
 <div className={bem.e('price')}>
 {/* TODO : درست كردن استايل اين قسمت در فايل SASS */}
    <h3 > خاك رس صورتي </h3>
    <span>تومان</span>
    <span>35000</span>
    <span>تخفيف</span>
    <footer className={bem.e('footer')}>
         <button onClick={()=>AddToShopcard(item)} >افزودن به سبد خريد</button>
     </footer >
</div>
     
);
const mapDispatchToProps = dispatch =>({
     AddToShopcard : item=>(dispatch(AddCardItem(item)))  
})
export default connect(null,mapDispatchToProps)(Pricecard);