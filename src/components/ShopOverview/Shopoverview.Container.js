import withSpinner from '../With-Spinner/With.Spinner';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectFetchLoader} from '../../Redux/Shop/Shop.selectors';
import {createStructuredSelector} from 'reselect';
import ShopOverview from './ShopOverview';

const mapStateToProps = createStructuredSelector({
    isloading : selectFetchLoader 
});
  
const ShopOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(ShopOverview)
export default ShopOverviewContainer;