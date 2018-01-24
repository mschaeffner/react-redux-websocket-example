import { connect } from 'react-redux'
import ChatContent from './ChatContent'


const mapStateToProps = state => {
  
  if(state.selectedChannel === 'ALL') {
    return {
      messages: state.messages
    }
  } else {
    return {
      messages: state.activeUsers.find(u => u.id === state.selectedChannel).messages
    }
  }
  
}

export default connect(mapStateToProps)(ChatContent)
