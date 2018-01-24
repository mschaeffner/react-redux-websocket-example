import { connect } from 'react-redux'
import ChatContent from './ChatContent'


const mapStateToProps = state => {

  const messages = (state.selectedChannel === 'ALL')
    ? state.messages
    : state.activeUsers.find(u => u.id === state.selectedChannel).messages
  
  return {
    messages
  }
  
}

export default connect(mapStateToProps)(ChatContent)
