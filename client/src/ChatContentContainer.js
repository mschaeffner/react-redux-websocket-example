import { connect } from 'react-redux'
import ChatContent from './ChatContent'
import { receiveMessage } from './actions'


const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: () => dispatch(receiveMessage("the sender", "the text")),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContent)
