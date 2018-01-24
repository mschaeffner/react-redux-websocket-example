import {
  NEW_MESSAGE_CHANGED,
  MESSAGE_SENT,
  USERNAME_CHANGED,
  CONNECTED_TO_SERVER,
  USER_LEFT,
  USER_JOINED,
  PUBLIC_MESSAGE,
  PRIVATE_MESSAGE,
  ACTIVE_USERS
} from './actions'


const INITIAL_STATE = {
  username: '',
  newMessageText: '',
  messages: [],
  connectionToServer: null,
  activeUsers: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NEW_MESSAGE_CHANGED:
      return { ...state, newMessageText: action.payload }

    case MESSAGE_SENT:
      return { ...state, newMessageText: ''}

    case ACTIVE_USERS:
      return { ...state, activeUsers: action.payload.users }

    case USER_JOINED:
      const activeUsers1 = [ ...state.activeUsers ]
      
      console.log(activeUsers1.filter(u => u.id === action.payload.id))
      console.log(!activeUsers1.filter(u => u.id === action.payload.id))
      
      if(!activeUsers1.filter(u => u.id === action.payload.id).length) {
        activeUsers1.push(action.payload)
      }
      return { ...state, activeUsers: activeUsers1 }

    case USER_LEFT:
      const activeUsers2 = state.activeUsers.filter(u => {
        return u.id !== action.payload.id
      })
      return { ...state, activeUsers: activeUsers2 }

    case PUBLIC_MESSAGE:
      const newMessage = action.payload
      const messages = [ ...state.messages, newMessage]
      return { ...state, messages }

    case USERNAME_CHANGED:
      return { ...state, username: action.payload }

    case CONNECTED_TO_SERVER:
      return { ...state, connectionToServer: action.payload }

    default:
      return state
  }
}

