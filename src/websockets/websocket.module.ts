import { Module } from "@nestjs/common";
import { WebSocketGateWay } from "./websocket.gateway";

@Module({
    providers: [WebSocketGateWay],
})

export class GatewayModule {}