import { DAILYLIST_RECEIVED, LIST_RECEIVED } from '../actions/index'

const INITIAL_STATE = []

const listReducer = (state = INITIAL_STATE, action) => {
  switch (
    action.type // @@INIT, TODOS_RECEIVED   ?
  ) {
    case LIST_RECEIVED:
      return action.items

    default:
      return state
  }
}

export default listReducer
