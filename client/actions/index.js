import {
  getItems,
  APIaddItem,
  APIdeleteItem,
  APIaddToList,
  getDailyList,
  APIdeleteDailyItem,
} from '../apis/items'

export const LIST_RECEIVED = 'LIST_RECEIVED'
export const DAILYLIST_RECEIVED = 'DAILYLIST_RECEIVED'
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

// get master list
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

// add new item to master list
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

// delete item from master list
export function deleteItem(item) {
  console.log(item)
  return (dispatch) => {
    APIdeleteItem(item)
      .then(() => {
        dispatch(listRequested())
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

// get daily shopping list
export function dailyListRequested() {
  return (dispatch) => {
    return getDailyList()
      .then((arrayOfList) => {
        dispatch({
          type: DAILYLIST_RECEIVED,
          list: arrayOfList,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// add list item to daily shopping list
export function addToList(item) {
  console.log(item)
  return (dispatch) => {
    APIaddToList(item)
      .then(() => {
        dispatch(dailyListRequested())
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

// delete daily item from shopping list
export function deleteDailyItem(item) {
  console.log(item)
  return (dispatch) => {
    APIdeleteDailyItem(item)
      .then(() => {
        dispatch(dailyListRequested())
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
