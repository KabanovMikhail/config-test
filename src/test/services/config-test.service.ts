import { Injectable } from '@nestjs/common';
import { CreateConfigTestDto } from '../dto/create-config-test.dto';
import { RepositoryTestService } from 'src/repository/repository-test.service';
import { ConfigTest } from '../entities/config-test.entity';
import { randomUUID } from 'crypto';
import { EventsGateway } from '../websocket/websocket.gateway';

@Injectable()
export class ConfigTestService {
  constructor(private repositoryService: RepositoryTestService, private gateway: EventsGateway) {}
  create(createConfigTestDto: CreateConfigTestDto) {
    const ConfigTest: ConfigTest = {
      id: randomUUID(),
      ...createConfigTestDto,
    };
    this.repositoryService.save(ConfigTest);
    return ConfigTest;
  }

  socket(message: any) {
    this.gateway.sendMessage(message);
  }


  findAll(): ConfigTest[] {
    return this.repositoryService.getAll() as ConfigTest[];
  }

  findOne(id: string): ConfigTest {
    return this.repositoryService.get(id);
  }

  remove(id: string) {
    const currentConfig = this.repositoryService.get(id);
    this.repositoryService.delete(currentConfig);
  }
}