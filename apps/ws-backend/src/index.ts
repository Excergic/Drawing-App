import { WebSocketServer } from 'ws';
import jwt from "jsonwebtoken";
import { JWT_SECRET } from './config';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request){
  const url = request.url;
  if(!url){
    return;
  }
  
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    
    if(!decoded || !decoded.userId){
      ws.close();
      return;
    }
    
    ws.on('message', function message(data){
      ws.send('pong');
    });
  } catch (error) {
    ws.close();
    return;
  }
});