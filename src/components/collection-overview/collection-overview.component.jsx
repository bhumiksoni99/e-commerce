import React from 'react';

import { connect } from 'react-redux';


import CollectionPreview from '../preview component/Collection-preview.component';

import './collection-overview.styles.scss';

import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
       collections.map(({title,items,id}) => (
        <CollectionPreview key={id} title={title} items={items} />
        ))
    }
    </div>
)

const mapStateToProps = state => ({
    collections: selectCollectionForPreview(state)    //this function gives back an array
})

export default connect(mapStateToProps)(CollectionsOverview)