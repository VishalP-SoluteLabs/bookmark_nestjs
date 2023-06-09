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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../auth/decorator/get-user.decorator");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const user_entity_1 = require("./user.entity");
const serealize_interceptor_1 = require("../auth/interceptor/serealize.interceptor");
const user_dto_1 = require("../auth/dto/user.dto");
let UserController = class UserController {
    getMe(user) {
        return user;
    }
};
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getMe", null);
UserController = __decorate([
    (0, serealize_interceptor_1.Serialize)(user_dto_1.UserDto),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('users')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map