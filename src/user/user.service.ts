import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/schema.user';

const userDatas = [
    {
        name:"yisak",
        email:"yis@gmail.com",
        password: "simple password"
    },
    {
        name:"Metaferiya",
        email:"metaf@gmail.com",
        password: "pass"
    }
]

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel:Model<UserDocument>

    ){}

    async findAllUser(){
        return userDatas;
    }
    async findOneUser(id: number){
        return userDatas[id];
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
}
