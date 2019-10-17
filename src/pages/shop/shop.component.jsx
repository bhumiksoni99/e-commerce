import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (     //we get access to match here as ShopPage is included in route in app.js and route automatically passes match,location and history
    <div className="shop-page">
       <Route exact path={`${match.path}`} component= {CollectionsOverview} />
       <Route path= {`${match.path}/:collectionId`} component={CollectionPage} />   
    </div>
)
//:category can be accessed in the CollectionPage component                
export default ShopPage