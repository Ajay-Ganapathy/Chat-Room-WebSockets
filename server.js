const WebSocket = require("ws")
const express = require("express")
const http = require("http")

const port = 8000

const server = http.createServer(express)
const websocketserver = new WebSocket.Server({server})


websocketserver.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    websocketserver.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})


server.listen(port, () => {
  console.log(`Server is listening at Port ${port}`)
})
