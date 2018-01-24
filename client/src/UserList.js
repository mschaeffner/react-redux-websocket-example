import React from 'react'
import styled from 'styled-components'


const List = styled.div`
  padding: 10px;
  div {
    padding: 5px;
  }
  .highlight {
    background-color: white;
    color: black;
  }
`;

export default ({myId, users, selectedChannel, selectUser}) => {
  
  const allItem = {
    id: 'ALL',
    username: 'ALL'
  }
  const list = [ allItem, ...users]
  
  return (
    <List>
      {list.map((user, index) =>
        <div
          className={selectedChannel === user.id ? 'highlight': ''}
          key={index}
          onClick={() => selectUser(user.id)}
        >
          {user.username}
          {myId === user.id ? ' (you)': ''}
        </div>
      )}
    </List>
  )  
}
