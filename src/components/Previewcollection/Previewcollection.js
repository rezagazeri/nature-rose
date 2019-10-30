import React from 'react';
import Card from '../Cards/Card';
import Pricecard from '../Cards/Pricecard/Pricecard';
import img from '../../images/Images';
import  bn from '../../Utils/bemnames';

const bem =bn.create('prcollection');

const Previewcollection = ({title ,items})=>(

   <div className={bem.b('prcollection')}>
      <h1>{title}</h1>
      <section className={bem.e('cards')}>
        {
           items
           .filter((item,index)=> index < 4 )
           .map(item =>(
             <Card 
                imageUrl={item.imageUrl}
                imageSize={img.shopcard}
                key={item.id}
                price = {<Pricecard item = {item} />} 
              />

           ))
        }
      </section>
   </div>
  
);
export default Previewcollection;