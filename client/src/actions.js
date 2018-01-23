export const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'


export function changeNewMessage(text) {
  return {
    type: CHANGE_NEW_MESSAGE,
    payload: text
  }
}

export function sendNewMessage() {
  return {
    type: SEND_NEW_MESSAGE
  }
}