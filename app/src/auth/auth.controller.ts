import { Controller, Post, Get} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('hello')
  allo(){
    return ("OKfdsfsd")
  }

  @Post('signup')
  signup(){
    return this.authService.signup()
  }

  @Post('signin')
  signin(){
    return 'signin route'
  }

  @Post('signout')
  signout(){
    return 'signout route'
  }
}
