import React, { Component } from 'react';
import Card from '../components/Cards/Card';
import CardHeader from '../components/Cards/Headercard/Headercard';
import {connect} from 'react-redux';
import {AddCardItem} from '../Redux/Card/CardAction';
import bn from '../Utils/bemnames';
import Pricecard from '../components/Cards/Pricecard/Pricecard';
import img from '../images/Images';
import SHOP_DATA from  '../ShopData';
const bem =bn.create('Homepage'); 
 class Hompage extends Component {
  // static props for pictures in home page
 
   
  constructor(props){
    super(props);
    this.state= {collections : SHOP_DATA}
   
  }
  
  render() {
    
    return (
      <main className= {bem.b('Homepage')}>
      {/* include main-slider and 2 item  */}
        <section className={bem.e('slitem')}>
          <div className={bem.e('items')}>
            <Card 
            imageUrl ={this.state.collections[0].items[0].imageUrl}
            imageSize = {img.carditem} />
            <Card 
            imageUrl ={this.state.collections[0].items[1].imageUrl}
            imageSize = {img.carditem} />
          </div>
          <div  className={bem.e('mslider')}>
            <div />
          </div>
        </section>
        {/* include items */}
        <section className={bem.e('collections')}>
          {this.state.collections[0].items.map((card,i)=>(
            <Card 
               header={<CardHeader />}
               price = {<Pricecard />} 
               imageUrl ={card.imageUrl}
               imageSize = {img.shopcard}
               key={card.id}
               />
               
          ))} 
        </section>
      </main>
    )
  }
}

  export default Hompage;

