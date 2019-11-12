import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectIsCollectionsLoaded} from '../../Redux/Shop/Shop.selectors';
import withSpinner from '../../components/With-Spinner/With.Spinner';
import {createStructuredSelector} from 'reselect';
import CollectionProduct from './CollectionProduct';

const mapStateToProps = createStructuredSelector({
    isloading : state=>!selectIsCollectionsLoaded(state)
});
  
const Collectionproductcontainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionProduct)
export default Collectionproductcontainer;

