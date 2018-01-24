import React from 'react'
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen'
import ChatScreen from './ChatScreen'


const mapStateToProps = state => {
  return {
    connectionToServer: state.connectionToServer
  }
}

const App = ({connectionToServer}) => { return connectionToServer ? <ChatScreen /> : <LoginScreen /> }
export default connect(mapStateToProps)(App)
