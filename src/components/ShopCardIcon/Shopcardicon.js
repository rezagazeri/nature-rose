import React from 'react';
import {connect} from 'react-redux';
import {CardDropDown}  from '../../Redux/Card/CardAction';
import {ReactComponent as Shopcard} from  '../../images/shopping-bag.svg';



const Shopcardicon = ({ToggleClickHandler,quantity}) => {
    return (
        <div className='shopicon' onClick={ToggleClickHandler}>
            <Shopcard  className='shopicon__icon'/>
            <span className='shopicon__count'>{quantity}</span>
            <span className='shopicon__text'>سبد خريد</span>
        </div>
    );
};
const mapDispatchToProps=dispatch=>({
    ToggleClickHandler :()=>dispatch(CardDropDown())
});
const mapStateToProps = ({card : {Shop_Card_Items}})=>({
     quantity : Shop_Card_Items.reduce((totalQuantity,item)=>totalQuantity + item.quantity,0)
});
export default connect(mapStateToProps,mapDispatchToProps)(Shopcardicon);



