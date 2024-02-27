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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigTestController = void 0;
const common_1 = require("@nestjs/common");
const config_test_service_1 = require("../services/config-test.service");
const create_config_test_dto_1 = require("../dto/create-config-test.dto");
let ConfigTestController = class ConfigTestController {
    constructor(ConfigTestService) {
        this.ConfigTestService = ConfigTestService;
    }
    create(createConfigTestDto) {
        return this.ConfigTestService.create(createConfigTestDto);
    }
    socket(message) {
        return this.ConfigTestService.socket(message);
    }
    findAll() {
        return this.ConfigTestService.findAll();
    }
    findOne(id) {
        return this.ConfigTestService.findOne(id);
    }
    remove(id) {
        return this.ConfigTestService.remove(id);
    }
};
exports.ConfigTestController = ConfigTestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_config_test_dto_1.CreateConfigTestDto]),
    __metadata("design:returntype", void 0)
], ConfigTestController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfigTestController.prototype, "socket", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigTestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigTestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigTestController.prototype, "remove", null);
exports.ConfigTestController = ConfigTestController = __decorate([
    (0, common_1.Controller)('config-test'),
    __metadata("design:paramtypes", [config_test_service_1.ConfigTestService])
], ConfigTestController);
//# sourceMappingURL=config-test.controller.js.map