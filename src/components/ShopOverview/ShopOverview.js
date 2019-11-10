import React from 'react';
import Previewcollection from '../Previewcollection/Previewcollection';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../Redux/Shop/Shop.selectors';
import {createStructuredSelector} from 'reselect';

const ShopOverview = ({collections}) => {
    return (
        <div className = 'shopoverview'>
            {
              collections.map(({id,...othercollectionprops})=>(
               <Previewcollection 
                  key={id}
                  {...othercollectionprops}
                />  
              ))
            }  
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview 
});
export default connect(mapStateToProps)(ShopOverview);