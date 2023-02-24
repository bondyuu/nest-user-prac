import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";
import { User } from "src/users/user.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3300,
    username: 'root',
    password: '1234',
    database: 'nest',
    entities: [User], // Entity 연결 -> orm에 의해 자동으로 테이블 생성
    synchronize: true,
}