import { Controller, Get, Body, Param,Post, Put, Delete, NotFoundException, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {

    constructor(
        private readonly useService : UserService
    ){}

    @Get()
    async findAllUser(){
        try{
            return this.useService.findAllUser();
            
        }catch (error){
            throw new HttpException(error.message, error.status)
        }
    }

    @Get(':id')
    async findOneUser(@Param('id') id: string){
        try{
            return this.useService.findOneUser(+id);
        }catch(error){
            throw new HttpException(error.message, error.status);
        }

    }

    @Post()
    async create(@Body() createUserDto : CreateUserDto){
        try{

            return this.useService.create(createUserDto);
            
        }catch(error){
            throw new HttpException(error.message, error.status);
        }
        
    }
}
