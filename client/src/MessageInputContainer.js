import { connect } from 'react-redux'
import MessageInput from './MessageInput'
import { changeNewMessage, sendNewMessage } from './actions'


const mapStateToProps = state => ({
  newMessageText: state.newMessageText
})

const mapDispatchToProps = dispatch => ({
  onChangeNewMessage: text => dispatch(changeNewMessage(text)),
  onSendNewMessage: () => dispatch(sendNewMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput)
