import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto } from './dto/create-bookmark.dto';
import { User } from 'src/user/user.entity';
import { UpdateBookMarkDto } from './dto/update-bookmark.dto';
export declare class BookmarkController {
    private readonly bookmarkService;
    constructor(bookmarkService: BookmarkService);
    getAllBookMarks(): Promise<import("./bookmark.entity").BookMark[]>;
    findBookMarkById(id: string): Promise<import("./bookmark.entity").BookMark>;
    createBookMark(createBookMarkDto: CreateBookMarkDto, user: User): Promise<import("./bookmark.entity").BookMark>;
    updateBookMark(id: string, updatebookmarkDto: UpdateBookMarkDto): Promise<import("./bookmark.entity").BookMark>;
    removeBookMark(id: string): void;
}
