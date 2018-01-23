export const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'


export const changeNewMessage = (text) => dispatch => {
  dispatch({
    type: CHANGE_NEW_MESSAGE,
    payload: text
  })
}

export const sendNewMessage = () => dispatch => {
  dispatch({
    type: SEND_NEW_MESSAGE
  })
}

export const receiveMessage = (sender, text) => dispatch => {
  dispatch({
    type: RECEIVE_MESSAGE,
    payload: {
      sender,
      text
    }
  })
}
