import React, { Component } from 'react';
import Card from '../components/Cards/Card';
import CardHeader from '../components/Cards/Headercard/Headercard';
import bn from '../Utils/bemnames';
import Pricecard from '../components/Cards/Pricecard/Pricecard';
import images from '../images/Images';
const bem =bn.create('Homepage'); 
export default class Hompage extends Component {
  // static props for pictures in home page
 
   
  constructor(props){
    super(props);
    this.state={
      collections :  [
        {
          name : 'slider',
          spesial : true,
          ID:1

        },
        {
          name : 'item2.jpeg',
          spesial : true,
          ID:2
        },
        {
          name : 'item2.jpeg',
          spesial : false,
          ID:3
        }
  
      ],
      cards : [
        {
                    name : 'card3.jpg',

          titel  : 'offer',
          persent : 10,
          description:'خاك رس صورتي',
          Price:58000,
          off : 0,
          ersal : 'رايگان',
          like : 0,
          ID:4
        },
        {
                    name : 'card3.jpg',

          titel  : 'offer',
          persent : 10,
          description:'خاك رس سفيد',
          Price:58000,
          off : 0,
          ersal : ' ',
          ID:5
        },
        {
                    name : 'card3.jpg',

          titel  : '../../images',
          persent : 10,
          description:'خاك رس سياه',
          Price:58000,
          off : 0,
          ersal : 'رايگان',
          ID:6
        },
        {
                    name : 'card3.jpg',

          titel  : 'offer',
          persent : 10,
          description:'خاك رس سبز',
          Price:58000,
          off : 0,
          ersal : 'رايگان',
          ID:7
        }
      ]
  }
   
  }
  
  render() {
    
    return (
      <main className= {bem.b('Homepage')}>
      {/* include main-slider and 2 item  */}
        <section className={bem.e('slitem')}>
        <div className={bem.e('items')}>
          <Card  imageUrl ={this.state.collections[1].name} />
          <Card imageUrl ={this.state.collections[2].name} />
        </div>
        <div  className={bem.e('mslider')}>
          <div />
        </div>
           
        </section>
        {/* include items */}
        <section className={bem.e('collections')}>
          {this.state.cards.map((card,i)=>(
            <Card 
               header={<CardHeader />}
               price = {<Pricecard />} 
               imageUrl ={card.name}/>
          ))} 
        </section>
      </main>
    )
  }
}

