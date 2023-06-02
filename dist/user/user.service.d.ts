import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private repo;
    private jwtService;
    constructor(repo: Repository<User>, jwtService: JwtService);
    signup(authDto: AuthDto): Promise<User>;
    signin(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
    findById(userId: number): Promise<User>;
}
