import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor( private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'JWT_SECRET',
    });
  }

  validate(payload: { sub: number; email: string }) {
    const user = this.userService.findById(payload.sub);
    if (!user) {
      return null;
    }
    return user;
  }
}
