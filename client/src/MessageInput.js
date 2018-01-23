import React from 'react'
import styled from 'styled-components'


const Input = styled.input`
  border: 1px solid #CCC;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  ::placeholder {
    color: #AAA;
  }
`;

export default ({newMessageText, onChangeNewMessage, onSendNewMessage}) =>
  <form onSubmit={event => { onSendNewMessage(); event.preventDefault(); return false} }>
    <Input
      onChange={event => onChangeNewMessage(event.target.value)}
      placeholder="Type new message and hit enter"
      value={newMessageText}
    />
  </form>
