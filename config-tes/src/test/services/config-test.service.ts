import { Injectable } from '@nestjs/common';
import { CreateConfigTestDto } from '../dto/create-config-test.dto';
import { RepositoryTestService } from 'src/repository/repository-test.service';
import { ConfigTest } from '../entities/config-test.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ConfigTestService {
  constructor(private repositorySerivce: RepositoryTestService) {}
  create(createConfigTestDto: CreateConfigTestDto) {
    const ConfigTest: ConfigTest = {
      id: randomUUID(),
      ...createConfigTestDto,
    };
    this.repositorySerivce.save(ConfigTest);

    return ConfigTest;
  }

  findAll(): ConfigTest[] {
    return this.repositorySerivce.getAll() as ConfigTest[];
  }

  findOne(id: string): ConfigTest {
    return this.repositorySerivce.get(id);
  }

  remove(id: string) {
    const currentConfig = this.repositorySerivce.get(id);
    this.repositorySerivce.delete(currentConfig);
  }
}