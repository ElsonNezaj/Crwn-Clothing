import ShopActionTypes from './shop.types'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = (errormsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errormsg,
})

export const fetchCollectionsStartAsync = () => {
  // return (dispatch) => {
  //   const collectionRef = firestore.collection('collections')
  //   console.log(collectionRef)
  //   dispatch(fetchCollectionsStart)
  //   collectionRef
  //     .get()
  //     .then((snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //       dispatch(fetchCollectionsSuccess(collectionsMap))
  //     })
  //     .catch((err) => dispatch(fetchCollectionsFailure(err.message)))
  // }
}
