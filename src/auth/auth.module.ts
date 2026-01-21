import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { UserModule } from 'src/user/user.module';


@Module({
  imports:[
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService)=>({
        secret: configService.get<string>('JWT_SECRET'),

      }),
      inject: [ConfigService],
     
    }),
     UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
