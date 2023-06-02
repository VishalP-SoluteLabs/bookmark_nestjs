"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookMarkDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bookmark_dto_1 = require("./create-bookmark.dto");
class UpdateBookMarkDto extends (0, mapped_types_1.PartialType)(create_bookmark_dto_1.CreateBookMarkDto) {
}
exports.UpdateBookMarkDto = UpdateBookMarkDto;
//# sourceMappingURL=update-bookmark.dto.js.map