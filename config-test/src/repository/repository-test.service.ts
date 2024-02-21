import { Injectable, Logger } from '@nestjs/common';
import { access, constants, readFileSync, writeFile } from 'fs';

interface Entity {
  id: string;
}
const FILE_NAME = 'test_config.json';

@Injectable()
export class RepositoryTestService {
  private logger = new Logger('Repository');
  save(entity: Entity) {
    const data = this.read();
    data[entity.id] = entity;
    this.write(data);
  }

  delete(entity: Entity) {
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

  private read(): any {
    access(FILE_NAME, constants.F_OK, (err) => {
      if (err) {
        this.write({});
      }
    });
    const data = readFileSync(FILE_NAME).toString('utf-8');
    this.logger.debug('Read data: \n' + JSON.stringify(data));

    return JSON.parse(data);
  }

  private write(data) {
    this.logger.debug('Store data: \n' + JSON.stringify(data));
    writeFile(FILE_NAME, JSON.stringify(data), { encoding: 'utf-8' }, (err) => {
      if (err) {
        this.logger.error(err);
      }
    });
  }
}
