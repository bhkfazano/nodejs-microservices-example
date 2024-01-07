import { DataSource } from "typeorm"

export const authDataSource = new DataSource({
    type: "postgres",
    host: "auth-database-srv",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "auth_service_database",
    entities: ["./entities/*.ts"],
    logging: false,
    synchronize: false,
})

export const init = async () => {
    authDataSource
        .initialize()
        .then(() => {
            console.log("Auth Service: data source initialized")
        })
        .catch((err) => {
            console.error("Auth Service: Error during data source initialization")
        })
}