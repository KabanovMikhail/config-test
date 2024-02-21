interface Entity {
    id: string;
}
export declare class RepositoryTestService {
    private logger;
    save(entity: Entity): void;
    delete(entity: Entity): void;
    getAll(): unknown[];
    get(id: any): any;
    private read;
    private write;
}
export {};
