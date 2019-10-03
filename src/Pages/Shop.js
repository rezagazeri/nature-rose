import React, { Component } from 'react'
import SHOP_DATA from '../ShopData';
import Previewcollection from '../components/Previewcollection/Previewcollection';
import bn from '../Utils/bemnames';

const bem =bn.create('shop');

export default class Shop extends Component {

    constructor(props){
        super(props);
        this.state={
            collections : SHOP_DATA
        }
       
      }
    render() {
        const {collections}= this.state;
        return (
            <div className={bem.b('shop')}>
               {
                  collections.map(({id,...othercollectionprops})=>(
                     <Previewcollection 
                        key={id}
                        {...othercollectionprops}
                     />  
                  ))
               } 
            </div>
        )
    }
}
