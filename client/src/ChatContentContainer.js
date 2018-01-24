import { connect } from 'react-redux'
import ChatContent from './ChatContent'
import { receiveMessage } from './actions'


const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(ChatContent)
