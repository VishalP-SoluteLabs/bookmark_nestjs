import { BookMark } from './bookmark.entity';
import { Repository } from 'typeorm';
import { CreateBookMarkDto } from './dto/create-bookmark.dto';
import { User } from 'src/user/user.entity';
export declare class BookmarkService {
    private repository;
    constructor(repository: Repository<BookMark>);
    findAll(): Promise<BookMark[]>;
    findById(id: number): Promise<BookMark>;
    save(createBookMarkDto: CreateBookMarkDto, user: User): Promise<BookMark>;
    update(id: number, attrs: Partial<BookMark>): Promise<BookMark>;
    remove(id: number): Promise<BookMark>;
}
