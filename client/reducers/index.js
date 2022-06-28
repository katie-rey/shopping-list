import { combineReducers } from 'redux'

import items from './items'
import list from './list'

export default combineReducers({
  items,
  list,
})
