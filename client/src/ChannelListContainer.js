import { connect } from 'react-redux'
import ChannelList from './ChannelList'
import { selectChannel } from './actions'


const mapStateToProps = state => {
  return {
    users: state.activeUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectChannel: (channelId) => dispatch(selectChannel(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
