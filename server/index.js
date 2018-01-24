const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })


var activeUsers = []


function broadcast(data) {
  activeUsers.forEach(function(user) {
    if (user.connection.readyState === WebSocket.OPEN) {
      user.connection.send(data)
    }
  })
}

function privateMessage(receiver, data) {
  activeUsers.forEach(function(user) {
    if (user.id === receiver && user.connection.readyState === WebSocket.OPEN) {
      user.connection.send(data)
    }
  })
}

wss.on('connection', function(ws) {

  ws.on('message', function(data) {

    const message = JSON.parse(data)
    console.log(message)

    if (message.type === "USER_JOINED") {
      activeUsers.push({
        id: message.payload.id,
        connection: ws,
        username: message.payload.username
      })

      const users = activeUsers.map(function(u) {
        return {
          id: u.id,
          username: u.username
        }
      })
      const activeUsersMessage = {
        type: "ACTIVE_USERS",
        payload: { users: users }
      }
      ws.send(JSON.stringify(activeUsersMessage))
    }

    if (message.type === "CHAT_MESSAGE" && message.payload.receiver !== "ALL") {
      privateMessage(message.payload.receiver, data)
    } else {
      broadcast(data)
    }

  })

  ws.on('close', function(data) {

    var leftUser = null
    activeUsers = activeUsers.filter(function(user) {
      if(user.connection === ws) {
        leftUser = user
        return false
      } else {
        return true
      }
    })

    const leftUsersMessage = {
      type: "USER_LEFT",
      payload: {
        id: leftUser.id,
        username: leftUser.username
      }
    }
    broadcast(JSON.stringify(leftUsersMessage))
  })

  ws.on('error', function(data) {
    console.log(data)
  })

})

console.log('Running Websocket server on port 8080')
