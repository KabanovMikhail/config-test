"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigTestService = void 0;
const common_1 = require("@nestjs/common");
const repository_test_service_1 = require("../../repository/repository-test.service");
const crypto_1 = require("crypto");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
let ConfigTestService = class ConfigTestService {
    constructor(repositoryService, gateway) {
        this.repositoryService = repositoryService;
        this.gateway = gateway;
    }
    create(createConfigTestDto) {
        const ConfigTest = {
            id: (0, crypto_1.randomUUID)(),
            ...createConfigTestDto,
        };
        this.repositoryService.save(ConfigTest);
        return ConfigTest;
    }
    socket(message) {
        this.gateway.sendMessage(message);
    }
    findAll() {
        return this.repositoryService.getAll();
    }
    findOne(id) {
        return this.repositoryService.get(id);
    }
    remove(id) {
        const currentConfig = this.repositoryService.get(id);
        this.repositoryService.delete(currentConfig);
    }
};
exports.ConfigTestService = ConfigTestService;
exports.ConfigTestService = ConfigTestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_test_service_1.RepositoryTestService, websocket_gateway_1.EventsGateway])
], ConfigTestService);
//# sourceMappingURL=config-test.service.js.map