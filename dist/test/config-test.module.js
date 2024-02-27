"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigTestModule = void 0;
const common_1 = require("@nestjs/common");
const config_test_service_1 = require("./services/config-test.service");
const config_test_controller_1 = require("./controllers/config-test.controller");
const repository_test_module_1 = require("../repository/repository-test.module");
const axios_1 = require("@nestjs/axios");
const websocket_module_1 = require("./websocket/websocket.module");
let ConfigTestModule = class ConfigTestModule {
};
exports.ConfigTestModule = ConfigTestModule;
exports.ConfigTestModule = ConfigTestModule = __decorate([
    (0, common_1.Module)({
        controllers: [config_test_controller_1.ConfigTestController],
        providers: [config_test_service_1.ConfigTestService],
        imports: [repository_test_module_1.RepositoryTestModule, axios_1.HttpModule, websocket_module_1.EventsModule],
    })
], ConfigTestModule);
//# sourceMappingURL=config-test.module.js.map