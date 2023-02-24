import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { AuthService } from "./auth.service";
import { LocalSerializer } from "./local.serializer";
import { LocalStategy } from "./local.strategy";

@Module({
    imports: [
        PassportModule.register({session:true}),
        TypeOrmModule.forFeature([User])
    ],
    providers: [AuthService, LocalStategy, LocalSerializer]
})

export class AuthModule {}