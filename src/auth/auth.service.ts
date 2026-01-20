import { Body, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDocument } from 'src/user/schemas/schema.user';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from 'jsonwebtoken';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ){}


    async validateUser(email: string, password: string){
        if(!email || !password){
            throw new UnauthorizedException('Invalid Credintials!');
        }

        let userDocument: UserDocument | null = null;
        try{
            userDocument = await this.userService.findOneUser(email);

        }catch(error){
            throw new UnauthorizedException(error.message);
        }

        return userDocument;
    }

    generateUserToken(user: UserDocument): string{
        if(!user){
            throw new UnauthorizedException('Invalid User!');
        }

        const token = this.jwtService.sign({
            id:user._id,
            email:user.email,
            username:user.username,
            name:user.name,
        });

        return token;
    }


    async login(
        @Body() loginUserDto: LoginDto,
        @Res({passthrough: true}) response: Response,
    ){
        const userDocument = await this.validateUser(
            loginUserDto.email,
            loginUserDto.password,
        );

        const token = this.generateUserToken(userDocument);

        return {
            message: `Logged in successfully. Welcome back ${userDocument.name}!`,
            token: token,
        };
    }

    async validateToken(token: string): Promise<JwtPayload> {
        if(!token){
            throw new UnauthorizedException('Invalid Token!');
        }

        const jwt_paylooad: JwtPayload = this.jwtService.verify(token, {
            secret: this.configService.get('JWT_SECRET'),
        });

        if(!jwt_paylooad){
            throw new UnauthorizedException("Invalid Token!");
        }

        // get user from database
        let userDocument: UserDocument | null = null;

        try{
            userDocument = await this.userService.findOneUser(jwt_paylooad.email);
        }catch(error){
            throw new UnauthorizedException(error.message);
        }

        if(!userDocument){
            throw new UnauthorizedException("User doesn't exist!")
        }

        // Remove passwotd field from user doc

        const sanitizedUserDocument = {
            ...userDocument, 
            password: undefined,
        };

        return sanitizedUserDocument;
    }



}
