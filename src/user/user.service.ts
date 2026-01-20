import { Injectable } from '@nestjs/common';

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


    ){}

    async findAllUser(){
        return userDatas;
    }
}
