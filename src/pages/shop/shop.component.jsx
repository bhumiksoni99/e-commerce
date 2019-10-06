import React from 'react';

import SHOP_DATA from './shopdata.js'

import CollectionPreview from '../../components/preview component/Collection-preview.component';


class ShopPage extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }   

    render()
    {
        return(
           <div className="shop-page">{
              this.state.collections.map(({title,items,id}) => (
                  <CollectionPreview key={id} title={title} items={items} />
              ))

           }
           </div>
        )
    }
}

export default ShopPage