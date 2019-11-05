import React from 'react';
import CustomButton from '../Custombutton/Cusstombutton';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectShopCardItems}  from '../../Redux/Card/Cardselectors';
import CardItem from '../CardItem/CardItem';
import {connect} from 'react-redux';

import bn from '../../Utils/bemnames';

const bem = bn.create('shopcarditems');

const ShopCardDropDown = ({Shop_Card_Items,history})=> {
    if(Shop_Card_Items.length !== 0){
      return (
        <div className={bem.b('shopcarditems')}  >
           <div className={bem.e('card-container')}>
              {Shop_Card_Items.map(item=>(<CardItem key={item.id} item={item}/>)) }
           </div> 
           <div className={bem.e('btn-container')}>
              <CustomButton onClick={()=>history.push('/checkout')} >تكميل خريد</CustomButton>
              <CustomButton>ادامه خريد</CustomButton>
           </div>
        </div>
     )}else{
         return (<div className={bem.b('shopcarditems')}  > سبد خريد شما خالي است </div>) }
};

const mapStateToProps =createStructuredSelector({
    Shop_Card_Items : selectShopCardItems 
})
export default withRouter(connect(mapStateToProps)(ShopCardDropDown));