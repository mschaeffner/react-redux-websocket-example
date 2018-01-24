import { connect } from 'react-redux'
import ChannelList from './ChannelList'


const mapStateToProps = state => {
  return {
    users: state.activeUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
