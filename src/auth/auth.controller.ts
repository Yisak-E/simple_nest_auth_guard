// import { Controller, Res, Post, Body, HttpException } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { Public } from './decorators/public.decorator';
// import { LoginDto } from './dto/login.dto';


// @Controller('auth')
// export class AuthController {
//     constructor(
//         private readonly authService: AuthService
//     ){}

//     @Post('login')
//     @Public()
//     async login(
//         @Body() loginDto: LoginDto,
//         @Res({ Passthrough : true}) response : Response, 
//     ){
//         try{
//             return await this.authService.login(loginDto, response);
//         } catch (error){
//             throw new HttpException(error.message, error.status);
//         }
//     }
// }



