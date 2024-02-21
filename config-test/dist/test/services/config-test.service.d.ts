import { CreateConfigTestDto } from '../dto/create-config-test.dto';
import { RepositoryTestService } from 'src/repository/repository-test.service';
import { ConfigTest } from '../entities/config-test.entity';
export declare class ConfigTestService {
    private repositorySerivce;
    constructor(repositorySerivce: RepositoryTestService);
    create(createConfigTestDto: CreateConfigTestDto): ConfigTest;
    findAll(): ConfigTest[];
    findOne(id: string): ConfigTest;
    remove(id: string): void;
}
