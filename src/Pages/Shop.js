import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateDataInShopReducer} from '../Redux/Shop/Shop.action';
import {firestore,convertSnapshotCollectionToObject}  from '../firebase/firebase.utils';
import ShopOverview from '../components/ShopOverview/ShopOverview';
import CollectionProduct from '../Pages/CollectionProduct';
import bn from '../Utils/bemnames';

const bem =bn.create('shop');

 class  Shop extends Component {
  unsubscribeFromSnapshot = null;  
  componentDidMount(){
    const {updateCollections} = this.props;
      const collectionRefrence = firestore.collection('collections');
      collectionRefrence.onSnapshot(async snapshot=>{
         updateCollections(convertSnapshotCollectionToObject(snapshot));
      });
  }  
  componentWillUnmount(){
    this.unsubscribeFromSnapshot();
  }
  render() {
    const {match}= this.props;
    return (
      <div className={bem.b('shop')}>
        <section className={bem.e('Cards')} >
            <Route exact path = {`${match.path}`} component = {ShopOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionProduct} />
        </section>
        <section className={bem.e('filters')}>
            <p>filtes is hier....</p>
        </section>
      </div>
)

    }
}

const DispatchToProps = dispatch=>({
   updateCollections : collection=>dispatch(UpdateDataInShopReducer(collection))
});
export default connect(null,DispatchToProps)(Shop);
