import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import * as dotenv from 'dotenv';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor() {
    super({
      clientID: 'u-s4t2ud-1f5ab0b02b6fb3c9a33bb8a7cba4ded3d1afb8d9de0039708408694fc72d2f8d',
      clientSecret: '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',
      callbackURL: 'https://ereur-fuzzy-invention-j99p4g9vwqrc5rgj-5000.preview.app.github.dev/auth/42/callback',
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