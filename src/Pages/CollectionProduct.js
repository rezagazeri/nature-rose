import React from 'react';
import {connect} from 'react-redux';
import img from '../images/Images';
import { selectCollectionItem } from '../Redux/Shop/Shop.selectors';
import Card from '../components/Cards/Card';
import Pricecard from '../components/Cards/Pricecard/Pricecard';
const CollectionProduct = ({Collection,match}) => {
    const {title,items} = Collection;
    return (
      <div className = 'collectionproduct'>
        <h2>{title}</h2>
        {
           items
           .map(item =>(
             <Card 
                imageUrl={item.imageUrl}
                imageSize={img.shopcard}
                key={item.id}
                price = {<Pricecard item = {item} />} 
              />

           ))
        }
      </div>
    );
};

const mapStateToProps = (state,ownProps)=>({
    Collection :  selectCollectionItem(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionProduct);