// import { Body, Injectable, Res, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { UserDocument } from 'src/user/schemas/schema.user';
// import { UserService } from 'src/user/user.service';

// @Injectable()
// export class AuthService {
//     constructor(
//         private readonly userService: UserService,
//         private jwtService: JwtService,
//         private configService: ConfigService,
//     ){}


//     async validateUser(email: string, password: string){
//         if(!email || !password){
//             throw new UnauthorizedException('Invalid Credintials!');
//         }

//         let userDocument: UserDocument | null = null;
//         try{
//             userDocument = await this.userService.findOne(email);
//         }
//     }

// }
