import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollection } from '../../redux/shop/shop.selector'
import PreviewCollection from '../preview collection/previewCollection.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCOllectionProps }) => {
      return (
        <PreviewCollection
          key={id}
          {...otherCOllectionProps}
        ></PreviewCollection>
      )
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
})

export default connect(mapStateToProps)(CollectionsOverview)
