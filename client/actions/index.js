import { getItems, APIaddItem } from '../apis/items'

export const LIST_RECEIVED = 'LIST_RECEIVED'
// export const ADD_TODO = 'ADD_TODO'

// export function setFruits(fruits) {
//   return {
//     type: SET_FRUITS,
//     fruits,
//   }
// }

// export function fetchFruits() {
//   return (dispatch) => {
//     return getFruits().then((fruits) => {
//       dispatch(setFruits(fruits))
//       return null
//     })
//   }
// }

export function listRequested() {
  return (dispatch) => {
    return getItems()
      .then((arrayOfItems) => {
        dispatch({
          type: LIST_RECEIVED,
          items: arrayOfItems,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function addNewItem(item) {
  console.log(item)
  return (dispatch) => {
    // from api
    APIaddItem(item)
      .then(() => {
        dispatch(listRequested())
      })
      // .then(addTodo(todo))
      .catch((err) => {
        console.error(err)
      })
  }
}
