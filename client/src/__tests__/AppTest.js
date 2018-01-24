import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer.js'
import App from '../App'


const STATE_ONLY_ME_LOGGED_IN = {
  activeUsers: [
    {id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias", messages: []}
  ],
  connectionToServer: "Websocket",
  me: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
  messages: [],
  newMessageText: "",
  selectedChannel: "ALL"
}


const STATE_WITH_3_USERS_AND_SOME_PUBLIC_MESSAGES = {
  activeUsers: [
    {id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias", messages: []},
    {id: "1d14f01e-69d9-4de9-9996-869fc291fbf8", username: "alice", messages: []},
    {id: "2d14f01e-69d9-4de9-9996-869fc291fbf8", username: "bob", messages: []},
  ],
  connectionToServer: "Websocket",
  me: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
  messages: [
    {
      receiver: "ALL",
      sender: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
      text: "the first message"
    },
    {
      receiver: "ALL",
      sender: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
      text: "the second message"
    },
    {
      receiver: "ALL",
      sender: { id: "1d14f01e-69d9-4de9-9996-869fc291fbf8", username: "alice" },
      text: "a message from alice"
    },
    {
      receiver: "ALL",
      sender: { id: "2d14f01e-69d9-4de9-9996-869fc291fbf8", username: "bob" },
      text: "a message from bob"
    }
  ],
  newMessageText: "starting of a new message",
  selectedChannel: "ALL"
}


const STATE_WITH_3_USERS_AND_SOME_PRIVATE_MESSAGES = {
  activeUsers: [
    {id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias", messages: []},
    {id: "1d14f01e-69d9-4de9-9996-869fc291fbf8", username: "alice", messages: [
      {
        receiver: "1d14f01e-69d9-4de9-9996-869fc291fbf8",
        sender: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
        text: "a private message to alice"
      },
      {
        receiver: "0d14f01e-69d9-4de9-9996-869fc291fbf8",
        sender: { id: "1d14f01e-69d9-4de9-9996-869fc291fbf8", username: "alice" },
        text: "a private message from alice back to mathias"
      }
    ]},
    {id: "2d14f01e-69d9-4de9-9996-869fc291fbf8", username: "bob", messages: []},
  ],
  connectionToServer: "Websocket",
  me: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
  messages: [
    {
      receiver: "ALL",
      sender: { id: "0d14f01e-69d9-4de9-9996-869fc291fbf8", username: "mathias" },
      text: "the first message"
    },
    {
      receiver: "ALL",
      sender: { id: "1d14f01e-69d9-4de9-9996-869fc291fbf8", username: "alice" },
      text: "the second message"
    }
  ],
  newMessageText: "starting of a new message",
  selectedChannel: "1d14f01e-69d9-4de9-9996-869fc291fbf8"
}



describe('App', () => {


  it('should render the login screen', () => {
    const store = createStore(reducer)
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('should render the app with only me logged in', () => {
    const store = createStore(reducer, STATE_ONLY_ME_LOGGED_IN)
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('should render the app with 3 users logged in and some public messages', () => {
    const store = createStore(reducer, STATE_WITH_3_USERS_AND_SOME_PUBLIC_MESSAGES)
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('should render the app with 3 users logged in and some private messages', () => {
    const store = createStore(reducer, STATE_WITH_3_USERS_AND_SOME_PRIVATE_MESSAGES)
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


})
