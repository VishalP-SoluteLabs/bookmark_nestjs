import { User } from 'src/user/user.entity';
export declare class BookMark {
    id: number;
    title: String;
    description?: string;
    link: string;
    created_at: Date;
    updated_at: Date;
    user: User;
}
