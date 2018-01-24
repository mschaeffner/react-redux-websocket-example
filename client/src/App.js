import React from 'react'
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen'
import ChatScreen from './ChatScreen'


const mapStateToProps = state => ({
  connectionToServer: state.connectionToServer
})

const App = ({connectionToServer}) =>
  (connectionToServer) ? <ChatScreen /> : <LoginScreen /> 

export default connect(mapStateToProps)(App)
