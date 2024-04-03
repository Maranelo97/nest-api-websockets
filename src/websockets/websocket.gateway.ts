import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebSocketGateWay implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket) {
        console.log(`Client Connected: ${client.id}`)
    }

    handleDisconnect(client: Socket) {
        console.log(`Client Disconected: ${client.id}`)
    }

    @SubscribeMessage('mensaje')
    handleMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
        console.log(data);
        client.broadcast.emit('mensajeSv', `Mensaje: ${data}`);
    }

    @SubscribeMessage('onNewUser')
    handleUser(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
        console.log(data);
        client.broadcast.emit('onNewUser', data);
    }
}
