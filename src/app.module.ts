import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigTestModule } from './test/config-test.module';
import { EventsModule } from './test/websocket/websocket.module';

@Module({
  imports: [ConfigTestModule,EventsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
