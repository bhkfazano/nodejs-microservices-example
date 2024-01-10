import { DataSource, DataSourceOptions } from "typeorm"
import env from "../config/env"

export const userDataSource = new DataSource({
    type: env.database.type as any,
    host: env.database.host,
    port: env.database.port,
    username: env.database.username,
    password: env.database.password,
    database: env.database.name,
    entities: ['src/database/entities/*.entity.ts'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    logging: false,
    synchronize: false,
} as DataSourceOptions)

export const init = async () => {
    userDataSource
        .initialize()
        .then(() => {
            console.log("User Service: data source initialized")
        })
        .catch((err) => {
            console.error("User Service: Error during data source initialization", err)
        })
}