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
  USER_SELECTED
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
  let activeUsers
  
  switch (action.type) {

    case USERNAME_CHANGED:
      const me = { ...state.me, username: action.payload } 
      return { ...state, me }

    case CONNECTED_TO_SERVER:
      return { ...state, connectionToServer: action.payload }

    case USER_SELECTED:
      return { ...state, selectedChannel: action.payload }

    case NEW_MESSAGE_CHANGED:
      return { ...state, newMessageText: action.payload }

    case MESSAGE_SENT:
      return { ...state, newMessageText: ''}

    case ACTIVE_USERS:
      activeUsers = action.payload.users.map(u => {
        u.messages = []
        return u
      })
      return { ...state, activeUsers }

    case USER_JOINED:
      activeUsers = [ ...state.activeUsers ]
      if(!activeUsers.filter(u => u.id === action.payload.id).length) {
        activeUsers.push({ ...action.payload, messages: [] })
      }
      return { ...state, activeUsers }

    case USER_LEFT:
      activeUsers = state.activeUsers.filter(u => {
        return u.id !== action.payload.id
      })
      let selectedChannel = state.selectedChannel
      if(selectedChannel === action.payload.id) {
        selectedChannel = 'ALL'
      } 
      return { ...state, activeUsers, selectedChannel }

    case CHAT_MESSAGE:
      const newMessage = action.payload
      
      if(newMessage.receiver === 'ALL') {
        const messages1 = [ ...state.messages, newMessage ]
        return { ...state, messages: messages1 }
      } else if(newMessage.receiver === state.me.id) {
        activeUsers = [ ...state.activeUsers ]
        const sender = activeUsers.find(u => u.id === newMessage.sender.id)
        sender.messages = [ ...sender.messages, newMessage ]
        return { ...state, activeUsers }
      } else {
        activeUsers = [ ...state.activeUsers ]
        const receiver = activeUsers.find(u => u.id === newMessage.receiver)
        receiver.messages = [ ...receiver.messages, newMessage ]
        return { ...state, activeUsers }
      }

    default:
      return state
  }
}

