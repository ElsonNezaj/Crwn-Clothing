import React from 'react'
import SHOP_DATA from './shop.data.js'

import PreviewCollection from '../../components/preview collection/previewCollection.component.jsx'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    console.log(collections)
    return (
      <div className="shop-page">
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
  }
}

export default ShopPage
