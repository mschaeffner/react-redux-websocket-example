import uuid from 'uuid/v4'

import {
  NEW_MESSAGE_CHANGED,
  MESSAGE_SENT,
  USERNAME_CHANGED,
  CONNECTED_TO_SERVER,
  USER_LEFT,
  USER_JOINED,
  CHAT_MESSAGE,
  ACTIVE_USERS,
  CHANNEL_SELECTED
} from './actions'


const INITIAL_STATE = {
  me: {
    username: '',
    id: uuid()
  },
  newMessageText: '',
  messages: [],
  connectionToServer: null,
  activeUsers: [],
  selectedChannel: 'ALL'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NEW_MESSAGE_CHANGED:
      return { ...state, newMessageText: action.payload }

    case MESSAGE_SENT:
      return { ...state, newMessageText: ''}

    case ACTIVE_USERS:
      const activeUsers = action.payload.users.map(u => {
        u.messages = []
        return u
      })
      return { ...state, activeUsers: action.payload.users }

    case USER_JOINED:
      const activeUsers1 = [ ...state.activeUsers ]
      if(!activeUsers1.filter(u => u.id === action.payload.id).length) {
        activeUsers1.push({ ...action.payload, messages: [] })
      }
      return { ...state, activeUsers: activeUsers1 }

    case USER_LEFT:
      const activeUsers2 = state.activeUsers.filter(u => {
        return u.id !== action.payload.id
      })
      return { ...state, activeUsers: activeUsers2 }

    case CHAT_MESSAGE:
      const newMessage = action.payload
      
      if(newMessage.receiver === 'ALL') {
        const messages1 = [ ...state.messages, newMessage ]
        return { ...state, messages: messages1 }
      } else {
        const activeUsers3 = state.activeUsers
        activeUsers3.find(u => u.id === newMessage.sender.id).messages.push(newMessage)
        return { ...state, activeUsers: activeUsers3 }
      }

    case USERNAME_CHANGED:
      const me = { ...state.me, username: action.payload } 
      return { ...state, me }

    case CONNECTED_TO_SERVER:
      return { ...state, connectionToServer: action.payload }

    case CHANNEL_SELECTED:
      return { ...state, selectedChannel: action.payload }

    default:
      return state
  }
}

