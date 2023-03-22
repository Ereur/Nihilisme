import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategy } from './fortytwo.strategy';
import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: '42' }),
  ],
  providers: [
    FortyTwoStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}