import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';



@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/42/callback',
      scope: 'public',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: (err: any, user: any, info?: any) => void) {
    const { id, login, email } = profile._json;

    const user = {
      id: id,
      login: login,
      email: email,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };

    done(null, user);
  }
}