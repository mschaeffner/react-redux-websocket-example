import React from 'react'
import styled from 'styled-components'


const Input = styled.input`
  border: 1px solid #CCC;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  ::placeholder {
    color: #AAA;
  }
`;

export default ({username, onChangeUsername, onConnectToServer}) =>
  <form onSubmit={event => { onConnectToServer(); event.preventDefault(); return false} }>
    <Input
      onChange={event => onChangeUsername(event.target.value)}
      placeholder="Choose a username and hit enter"
      value={username}
    />
  </form>
