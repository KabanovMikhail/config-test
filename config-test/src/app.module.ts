import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigTestModule } from './test/config-test.module';

@Module({
  imports: [ConfigTestModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
