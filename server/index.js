const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

function broadcast(data) {
  wss.clients.forEach(function(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

wss.on('connection', function(ws) {
  ws.on('message', function(data) {
    broadcast(data)
  })
})

console.log('Running Websocket server on port 8080')