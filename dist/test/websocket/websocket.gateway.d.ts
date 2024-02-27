import { Socket } from 'socket.io';
import { Server } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    socket: Socket;
    sendMessage(message: any): void;
    onMessage(client: any, payload: any): void;
}
