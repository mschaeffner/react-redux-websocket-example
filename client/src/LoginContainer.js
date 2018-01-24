import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { changeUsername, connectToServer } from './actions'


const mapStateToProps = state => ({
  username: state.username
})

const mapDispatchToProps = dispatch => ({
  onChangeUsername: username => dispatch(changeUsername(username)),
  onConnectToServer: () => dispatch(connectToServer())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
