import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/collection-overview/collections.overview.jsx'
import CollectionPage from '../collection/collection.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js'
import {
  selectIsCollectionFetching,
  selectCollectionLoaded,
} from '../../redux/shop/shop.selector.js'

import { createStructuredSelector } from 'reselect'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props

    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props
    const { isCollectionFetching, isCollectionLoaded } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectCollectionLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
