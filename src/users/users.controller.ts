import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() user : {id: number; name: string; age: number}) {
        return this.usersService.create(user);
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        const userId = Number(id);
        return this.usersService.findOne(userId);
    }
}
