import { Controller, Get, UseGuards ,Req} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('42')
  @UseGuards(AuthGuard('42'))
  async auth() {}

  @Get('42/callback')
  @UseGuards(AuthGuard('42'))
  async authCallback(@Req() req) {
    return req.user;
  }
  
}
