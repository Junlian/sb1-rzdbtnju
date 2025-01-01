import { WebSocket } from 'ws';
import { Project } from '../models/Project';

const clients = new Map<string, WebSocket>();

export function handleWebSocketConnection(ws: WebSocket) {
  const clientId = Math.random().toString(36).substring(7);
  clients.set(clientId, ws);

  ws.on('message', async (message: string) => {
    const data = JSON.parse(message);
    
    switch (data.type) {
      case 'CODE_CHANGE':
        broadcastCodeChange(clientId, data.payload);
        break;
      case 'CURSOR_MOVE':
        broadcastCursorPosition(clientId, data.payload);
        break;
    }
  });

  ws.on('close', () => {
    clients.delete(clientId);
  });
}

function broadcastCodeChange(senderId: string, payload: any) {
  clients.forEach((client, id) => {
    if (id !== senderId) {
      client.send(JSON.stringify({
        type: 'CODE_CHANGE',
        payload
      }));
    }
  });
}

function broadcastCursorPosition(senderId: string, payload: any) {
  clients.forEach((client, id) => {
    if (id !== senderId) {
      client.send(JSON.stringify({
        type: 'CURSOR_MOVE',
        payload
      }));
    }
  });
}