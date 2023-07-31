// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3002});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Broadcast the received message to all connected clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
