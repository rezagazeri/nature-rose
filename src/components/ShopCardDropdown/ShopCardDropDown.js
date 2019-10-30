import React from 'react';
import CustomButton from '../Custombutton/Cusstombutton';
import CardItem from '../CardItem/CardItem';
import {connect} from 'react-redux';

import bn from '../../Utils/bemnames';

const bem = bn.create('shopcarditems');

const ShopCardDropDown = ({Shop_Card_Items})=> {
    return (
        <div className={bem.b('shopcarditems')}  >
           <div className={bem.e('card-container')}>
              {Shop_Card_Items.map(item=>(<CardItem key={item.id} item={item}/>)) }
           </div> 
           <div className={bem.e('btn-container')}>
               <CustomButton>تكميل خريد</CustomButton>
               <CustomButton>ادامه خريد</CustomButton>
           </div>
        </div>
    );
};

const mapStateToProps = ({card:{Shop_Card_Items}})=>({
    Shop_Card_Items  
})
export default connect(mapStateToProps)(ShopCardDropDown);