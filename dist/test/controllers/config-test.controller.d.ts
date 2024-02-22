import { ConfigTestService } from '../services/config-test.service';
import { CreateConfigTestDto } from '../dto/create-config-test.dto';
export declare class ConfigTestController {
    private readonly ConfigTestService;
    constructor(ConfigTestService: ConfigTestService);
    create(createConfigTestDto: CreateConfigTestDto): import("../entities/config-test.entity").ConfigTest;
    findAll(): import("../entities/config-test.entity").ConfigTest[];
    findOne(id: string): import("../entities/config-test.entity").ConfigTest;
    remove(id: string): void;
}
