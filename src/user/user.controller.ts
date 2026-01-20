import { Controller, Get, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly useService : UserService
    ){}

    @Get()
    async findAllUser(){
        try{

            return this.useService.findAllUser();
            

        }catch (error: unknown){
            throw new NotFoundException("no user found")
        }
    }
}
