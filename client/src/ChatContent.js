import React from 'react'


export default ({messages}) =>
  <div>
    {messages.map((msg, index) =>
      <div key={index}>
        <b>{msg.sender.username}:</b> {msg.text}
      </div>
    )}
  </div>
