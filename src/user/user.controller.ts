import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUser() {
        console.log('hihi!!~');
        return this.userService.findAll();
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return this.userService.findOne(+id);
    }

    @Post()
    postUser(@Body() body) {

        return 'OK';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {

        return 'OK';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'OK';
    }
}
