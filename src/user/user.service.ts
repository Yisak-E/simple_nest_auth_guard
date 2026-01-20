import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/schema.user';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel:Model<UserDocument>

    ){}

    async findAllUser(){
        const userDocuments = await this.userModel.find();
    
        if(userDocuments.length === 0){
            throw new NotFoundException("No users in the database");
        }

        return userDocuments;
    }
    async findOneUser(username: string){
       const userDocument = await this.userModel.findOne({username: username});

       if(!userDocument){
        throw new NotFoundException(`User with username: ${username} not found`);
       }

       return userDocument;
    }

    async create(createUserDto: CreateUserDto){
        let userCreated: CreateUserDto| null = null;

        try{
            userCreated = await this.userModel.create(createUserDto);
        }catch(error){
            throw new InternalServerErrorException(error.message);
        }

        if(!userCreated){
            throw new InternalServerErrorException('User not created');
        }

        return userCreated;
    }

    async remove(username: string){
        const result = await this.userModel.deleteOne({username : username});

        if(result.deletedCount === 0){
            throw new NotFoundException(`User with username: ${username} is not found.`)
        }
    }
}
