import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {StartDataFetching} from '../../Redux/Shop/Shop.action';
import ShopOverviewContainer from '../../components/ShopOverview/Shopoverview.Container';
import Collectionproductcontainer from '../../Pages/Collectionproduct/Collectionproduct.container';
import bn from '../../Utils/bemnames';

const bem =bn.create('shop');

 class  Shop extends Component {

  componentDidMount(){
    const {FetchShopDataFromServerAsync} = this.props;
    FetchShopDataFromServerAsync();      
  }  
 
  render() {
    const {match}= this.props;
    return (
      <div className={bem.b('shop')}>
        <section className={bem.e('Cards')} >
            <Route exact path = {`${match.path}`} component = {ShopOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={Collectionproductcontainer} />
        </section>
        <section className={bem.e('filters')}>
            <p>filtes is hier....</p>
        </section>
      </div>
)

    }
}
const mapDispatchToProps = dispatch=>({
  FetchShopDataFromServerAsync :()=> dispatch(StartDataFetching())
});


export default connect(null,mapDispatchToProps)(Shop);
