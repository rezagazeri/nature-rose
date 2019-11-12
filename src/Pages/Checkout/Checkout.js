import React from 'react';
import CustomButton from '../../components/Custombutton/Cusstombutton';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCardItems,selectTotalCalc} from '../../Redux/Card/Cardselectors';
import CheckoutItem from '../../components/Checkoutitem/CheckoutItem';
import bn from '../../Utils/bemnames';
const bem =bn.create('checkout');
const Checkout = ({Shop_Card_Items,AddItem}) => {
    return (
        <div className={bem.b('checkout')}>
           <header className={bem.e('header')}>
             <h2>سبد خريد شما در فروشگاه نيچرز</h2>
           </header>
           <div className={bem.e('pricecontainer')}>
                <div className={bem.e('cardcontainer')}>
                {
                   Shop_Card_Items.map(item=>(<CheckoutItem key={item.id} item={item}  />))
                }
                </div> 
                <div className={bem.e('sumcontainer')}>
                    <div className={bem.e('price')}>
                        <span> مجموع قيمت سبد خريد :</span>
                        <span> {AddItem}</span>
                    </div>
                    <div className={bem.e('price')}>
                        <span> تخفيف :</span>
                        <span> 1234</span>
                    </div>
                    <div className={bem.e('price')}>
                        <span>مبلغ قابل پرداخت :</span>
                        <span> 1234</span>
                    </div>
                    <CustomButton>ادامه خريد</CustomButton>

                </div> 
            </div>    
        </div>
    );
};
 const mapStateToProps = createStructuredSelector({
    Shop_Card_Items : selectShopCardItems,
    AddItem : selectTotalCalc
 });
export default connect(mapStateToProps)(Checkout);