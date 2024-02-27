import { CreateConfigTestDto } from '../dto/create-config-test.dto';
import { RepositoryTestService } from 'src/repository/repository-test.service';
import { ConfigTest } from '../entities/config-test.entity';
import { EventsGateway } from '../websocket/websocket.gateway';
export declare class ConfigTestService {
    private repositoryService;
    private gateway;
    constructor(repositoryService: RepositoryTestService, gateway: EventsGateway);
    create(createConfigTestDto: CreateConfigTestDto): ConfigTest;
    socket(message: any): void;
    findAll(): ConfigTest[];
    findOne(id: string): ConfigTest;
    remove(id: string): void;
}
