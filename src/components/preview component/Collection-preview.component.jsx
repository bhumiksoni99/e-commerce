import React from 'react';

import './Collection-preview.comp.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((items,idx) => idx < 4) //because we need to display only 4 on the preview page i.e why filter is used
                .map(({id,name,price,imageUrl}) => (
                    <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;