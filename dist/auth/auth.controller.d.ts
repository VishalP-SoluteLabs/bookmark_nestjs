import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    signup(authDto: AuthDto): Promise<import("../user/user.entity").User>;
    signin(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
}
