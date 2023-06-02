import { BookMark } from 'src/bookmark/bookmark.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    created_at: Date;
    updated_at: Date;
    bookmark: BookMark[];
}
