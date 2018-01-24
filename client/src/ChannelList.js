import React from 'react'
import styled from 'styled-components'


const List = styled.div`
  padding: 10px;
`;

export default ({users, selectChannel}) =>
  <List>
    <div onClick={()=>selectChannel('ALL')}>ALL</div>
    {users.map((user, index) =>
      <div key={index} onClick={()=>selectChannel(user.id)}>
        {user.username}
      </div>
    )}
  </List>
