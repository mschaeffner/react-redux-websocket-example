import React from 'react'


export default ({users}) =>
  <div>
    {users.map((user, index) =>
      <div key={index}>
        {user.username}
      </div>
    )}
  </div>
