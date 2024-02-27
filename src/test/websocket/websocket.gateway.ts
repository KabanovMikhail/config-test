import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';
import { Injectable } from '@nestjs/common';


@WebSocketGateway()

@Injectable()
export class EventsGateway {

  @WebSocketServer()
  server: Server;
  socket: Socket;


  sendMessage(message: any) {
    this.server.emit('makePost', message);
  }


  @SubscribeMessage('makePost')
  onMessage(client: any, payload: any):void {


    client.emit('ack', 'Message received',payload); 
  }

}