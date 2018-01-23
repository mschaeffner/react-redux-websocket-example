import {
  CHANGE_NEW_MESSAGE,
  SEND_NEW_MESSAGE
} from './actions'


const INITIAL_STATE = {
  newMessageText: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE:
      return { ...state, newMessageText: action.payload}
    case SEND_NEW_MESSAGE:
      return { ...state, newMessageText: ''}
    default:
      return state
  }
}

