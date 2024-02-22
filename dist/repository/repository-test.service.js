"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryTestService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const FILE_NAME = 'test_config.json';
let RepositoryTestService = class RepositoryTestService {
    constructor() {
        this.logger = new common_1.Logger('Repository');
    }
    save(entity) {
        const data = this.read();
        data[entity.id] = entity;
        this.write(data);
    }
    delete(entity) {
        const data = this.read();
        delete data[entity.id];
        this.write(data);
    }
    getAll() {
        const data = this.read();
        return Object.values(data);
    }
    get(id) {
        const data = this.read();
        return data[id] ?? null;
    }
    read() {
        (0, fs_1.access)(FILE_NAME, fs_1.constants.F_OK, (err) => {
            if (err) {
                this.write({});
            }
        });
        const data = (0, fs_1.readFileSync)(FILE_NAME).toString('utf-8');
        this.logger.debug('Read data: \n' + JSON.stringify(data));
        return JSON.parse(data);
    }
    write(data) {
        this.logger.debug('Store data: \n' + JSON.stringify(data));
        (0, fs_1.writeFile)(FILE_NAME, JSON.stringify(data), { encoding: 'utf-8' }, (err) => {
            if (err) {
                this.logger.error(err);
            }
        });
    }
};
exports.RepositoryTestService = RepositoryTestService;
exports.RepositoryTestService = RepositoryTestService = __decorate([
    (0, common_1.Injectable)()
], RepositoryTestService);
//# sourceMappingURL=repository-test.service.js.map