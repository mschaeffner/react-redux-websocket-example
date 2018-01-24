export const NEW_MESSAGE_CHANGED = 'NEW_MESSAGE_CHANGED'
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const USERNAME_CHANGED = 'USERNAME_CHANGED'
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER'
export const USER_SELECTED = 'USER_SELECTED'

export const USER_JOINED = 'USER_JOINED'
export const USER_LEFT = 'USER_LEFT'
export const CHAT_MESSAGE = 'CHAT_MESSAGE'
export const ACTIVE_USERS = 'ACTIVE_USERS'

const SERVER_URL = 'ws://localhost:8080'


export const selectUser = (id) => dispatch => {
  dispatch({
    type: USER_SELECTED,
    payload: id
  })
}

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
    type: CHAT_MESSAGE,
    payload: {
      sender: state.me,
      text: state.newMessageText,
      receiver: state.selectedChannel
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
      payload: state.me
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
