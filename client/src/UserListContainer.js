import { connect } from 'react-redux'
import UserList from './UserList'
import { selectUser } from './actions'


const mapStateToProps = state => ({
  users: state.activeUsers,
  selectedChannel: state.selectedChannel,
  myId: state.me.id
})

const mapDispatchToProps = dispatch => ({
  selectUser: (id) => dispatch(selectUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
