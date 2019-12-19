import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'abc123',
    database: 'demo',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],

    synchronize: false,

    migrationsRun: false,
    logging: true,
    logger: 'simple-console',

    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = config;
