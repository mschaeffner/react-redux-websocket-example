import uuid from 'uuid/v4'

export const NEW_MESSAGE_CHANGED = 'NEW_MESSAGE_CHANGED'
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const USERNAME_CHANGED = 'USERNAME_CHANGED'
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER'

export const USER_JOINED = 'USER_JOINED'
export const USER_LEFT = 'USER_LEFT'
export const PUBLIC_MESSAGE = 'PUBLIC_MESSAGE'
export const PRIVATE_MESSAGE = 'PRIVATE_MESSAGE'
export const ACTIVE_USERS = 'ACTIVE_USERS'


const SERVER_URL = 'ws://localhost:8080'




export const changeNewMessage = (text) => dispatch => {
  dispatch({
    type: NEW_MESSAGE_CHANGED,
    payload: text
  })
}

export const changeUsername = (username) => dispatch => {
  dispatch({
    type: USERNAME_CHANGED,
    payload: username
  })
}

export const sendNewMessage = () => (dispatch, getState) => {
  const state = getState()
  const newMessage = {
    type: PUBLIC_MESSAGE,
    payload: {
      sender: state.username,
      text: state.newMessageText
    }
  }
  state.connectionToServer.send(JSON.stringify(newMessage))
  dispatch({
    type: MESSAGE_SENT
  })
}

export const receiveMessage = (message) => dispatch => {
  dispatch({
    type: message.type,
    payload: message.payload
  })
}

export const connectToServer = () => (dispatch, getState) => {
  const state = getState()
  const connection = new WebSocket(SERVER_URL)

  connection.onopen = () => {
    dispatch({
      type: CONNECTED_TO_SERVER,
      payload: connection
    })

    const newMessage = {
      type: USER_JOINED,
      payload: {
        username: state.username,
        id: uuid()
      }
    }
    connection.send(JSON.stringify(newMessage))
  }

  connection.onerror = error => {
    console.error('WebSocket Error ' + error)
  }

  connection.onmessage = data => {
    const message = JSON.parse(data.data)
    console.log("onmessage", message)
    dispatch(receiveMessage(message))
  }

}



