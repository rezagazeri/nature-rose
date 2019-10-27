import React from 'react';
import {connect} from 'react-redux';
import {CardDropDown}  from '../../Redux/Card/CardAction';
import {ReactComponent as Shopcard} from  '../../images/shopping-bag.svg';



const Shopcardicon = ({ToggleClickHandler}) => {
    return (
        <div className='shopicon' onClick={ToggleClickHandler}>
            <Shopcard  className='shopicon__icon'/>
            <span className='shopicon__count'>0</span>
            <span className='shopicon__text'>سبد خريد</span>
        </div>
    );
};
const mapDispatchToProps=dispatch=>({
    ToggleClickHandler :()=>dispatch(CardDropDown())
});
export default connect(null,mapDispatchToProps)(Shopcardicon);



