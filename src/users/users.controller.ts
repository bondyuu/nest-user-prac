import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { localAuthGuard } from 'src/auth/local-auth.guard';
import { Users } from 'src/decorator/users.decorator';
import { SaveUserDto } from './dto/saveUser.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get(':id')
    async findUserById(@Param('id') id: number): Promise<User> {
        return await this.userService.findUserById(id);
    }

    @Post('signup')
    async signUp(@Body() requestDto: SaveUserDto): Promise<User> {
        return await this.userService.signUp(requestDto);
    }

    @UseGuards(localAuthGuard)
    @Post('login')
    login(@Users() user) {
        return user;
    }

}
