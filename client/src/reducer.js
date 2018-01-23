import {
  NEW_MESSAGE_CHANGED,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  CONNECTED_TO_SERVER
} from './actions'


const INITIAL_STATE = {
  newMessageText: '',
  messages: [],
  connectionToServer: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NEW_MESSAGE_CHANGED:
      return { ...state, newMessageText: action.payload }

    case MESSAGE_SENT:
      return { ...state, newMessageText: ''}

    case MESSAGE_RECEIVED:
      const newMessage = action.payload
      const messages = [ ...state.messages, newMessage]
      return { ...state, messages }

    case CONNECTED_TO_SERVER:
      return { ...state, connectionToServer: action.payload }

    default:
      return state
  }
}

