export const NEW_MESSAGE_CHANGED = 'NEW_MESSAGE_CHANGED'
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER'

const SERVER_URL = 'ws://localhost:8080'


export const changeNewMessage = (text) => dispatch => {
  dispatch({
    type: NEW_MESSAGE_CHANGED,
    payload: text
  })
}

export const sendNewMessage = () => (dispatch, getState) => {
  const state = getState()
  const newMessage = { sender: "Mathias", text: state.newMessageText }
  state.connectionToServer.send(JSON.stringify(newMessage))
  dispatch({
    type: MESSAGE_SENT
  })
}

export const receiveMessage = (message) => dispatch => {
  dispatch({
    type: MESSAGE_RECEIVED,
    payload: message
  })
}

export const connectToServer = () => dispatch => {
  
  const connection = new WebSocket(SERVER_URL)

  connection.onopen = () => {
    dispatch({
      type: CONNECTED_TO_SERVER,
      payload: connection
    })
  }

  connection.onerror = error => {
    console.error('WebSocket Error ' + error)
  }

  connection.onmessage = data => {
    const message = JSON.parse(data.data)
    dispatch(receiveMessage(message))
  }

}



