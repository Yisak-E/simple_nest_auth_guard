// import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
// import { AuthService } from "../auth.service";
// import { Reflector } from "@nestjs/core";
// import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
// import { Observable } from "rxjs";


// @Injectable()
// export class AuthGuard implements CanActivate{
//     constructor(
//         private readonly authService: AuthService,
//         private reflector: Reflector,
//     ){}

//     async canActivate(context: ExecutionContext):|Promise<Boolean> {
//         // Read metadata and if isPublic decorator is used, set isPublic to true
//         const isPublic = this.reflector.getAllAndOverride<Boolean>(IS_PUBLIC_KEY, [
//             context.getHandler(),
//             context.getClass(),
//         ]);

//         if (isPublic){
//             return true;
//         }

//         const request = context.switchToHttp().getRequest();

//         const token = request.headers.token as string;
//         request.decodedData = await this.authService.validateToken(token);

//         return true;
        
//     }
// }