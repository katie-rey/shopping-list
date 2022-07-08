import { DAILYLIST_RECEIVED } from '../actions/index'

const INITIAL_STATE = []

const dailyListReducer = (state = INITIAL_STATE, action) => {
  switch (
    action.type // @@INIT, TODOS_RECEIVED   ?
  ) {
    case DAILYLIST_RECEIVED:
      return action.list

    default:
      return state
  }
}

export default dailyListReducer
