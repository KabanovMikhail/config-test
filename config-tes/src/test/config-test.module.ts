import { Module } from '@nestjs/common';
import { ConfigTestService } from './services/config-test.service';
import { ConfigTestController } from './controllers/config-test.controller';
import { RepositoryTestModule } from 'src/repository/repository-test.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ConfigTestController],
  providers: [ConfigTestService],
  imports: [RepositoryTestModule, HttpModule],
})
export class ConfigTestModule {}