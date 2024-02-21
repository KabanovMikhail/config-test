import { Module } from '@nestjs/common';
import { RepositoryTestService } from './repository-test.service';

@Module({
  providers: [RepositoryTestService],
  exports: [RepositoryTestService],
})
export class RepositoryTestModule {}
