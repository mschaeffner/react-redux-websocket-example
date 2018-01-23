import {
  CHANGE_NEW_MESSAGE,
  SEND_NEW_MESSAGE,
  RECEIVE_MESSAGE
} from './actions'


const INITIAL_STATE = {
  newMessageText: '',
  messages: [{sender:"acsc", text:"aascsac"}]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CHANGE_NEW_MESSAGE:
      return { ...state, newMessageText: action.payload}

    case SEND_NEW_MESSAGE:
      return { ...state, newMessageText: ''}

    case RECEIVE_MESSAGE:
      const newMessage = action.payload
      const messages = [ ...state.messages, newMessage]
      return { ...state, messages}

    default:
      return state
  }
}

