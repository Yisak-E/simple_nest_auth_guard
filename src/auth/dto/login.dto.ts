import { IsNotEmpty, IsEmail, IsStrongPassword, IsString } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}