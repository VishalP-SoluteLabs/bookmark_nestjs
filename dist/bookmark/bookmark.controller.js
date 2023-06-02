"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const bookmark_service_1 = require("./bookmark.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const create_bookmark_dto_1 = require("./dto/create-bookmark.dto");
const get_user_decorator_1 = require("../auth/decorator/get-user.decorator");
const user_entity_1 = require("../user/user.entity");
const update_bookmark_dto_1 = require("./dto/update-bookmark.dto");
let BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    getAllBookMarks() {
        return this.bookmarkService.findAll();
    }
    findBookMarkById(id) {
        return this.bookmarkService.findById(+id);
    }
    createBookMark(createBookMarkDto, user) {
        return this.bookmarkService.save(createBookMarkDto, user);
    }
    updateBookMark(id, updatebookmarkDto) {
        return this.bookmarkService.update(+id, updatebookmarkDto);
    }
    removeBookMark(id) { }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "getAllBookMarks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "findBookMarkById", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bookmark_dto_1.CreateBookMarkDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "createBookMark", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bookmark_dto_1.UpdateBookMarkDto]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "updateBookMark", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "removeBookMark", null);
BookmarkController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('bookmark'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
exports.BookmarkController = BookmarkController;
//# sourceMappingURL=bookmark.controller.js.map