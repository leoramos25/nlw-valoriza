"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsService = void 0;
const typeorm_1 = require("typeorm");
const TagsRepositories_1 = require("../repositories/TagsRepositories");
const class_transformer_1 = require("class-transformer");
class ListTagsService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const tagsRepositories = typeorm_1.getCustomRepository(TagsRepositories_1.TagsRepositories);
            const tags = yield tagsRepositories.find();
            return class_transformer_1.classToPlain(tags);
        });
    }
}
exports.ListTagsService = ListTagsService;
