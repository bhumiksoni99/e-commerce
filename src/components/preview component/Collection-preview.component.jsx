import React from 'react';

import './Collection-preview.comp.styles.scss';

import {Link} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <div className="head">
            <h1 className="title">{title.toUpperCase()}</h1>
            <Link className="link" to={`/shop/${title.toLowerCase()}`}>See All &rarr;</Link>
        </div>
        <div className="preview">
            {
                items
                .filter((item,idx) => idx < 4) //because we need to display only 4 on the preview page i.e why filter is used
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;