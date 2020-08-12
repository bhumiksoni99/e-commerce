import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {     //we get access to match here as ShopPage is included in route in app.js and route automatically passes match,location and history
    state = {
        loading:true
    }
    unsubcribeFromSnapShot = null

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
        
            const collectionsMaps = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMaps)
            this.setState({loading:false})
        })
    }
    
    render() {
        const { match } = this.props
        const { loading } = this.state
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/> } />
            <Route path= {`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading = {loading} {...props} />} />   
        </div>
)
}
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMaps => dispatch(updateCollections(collectionsMaps))
})
//:category can be accessed in the CollectionPage component                
export default connect(null,mapDispatchToProps)(ShopPage)