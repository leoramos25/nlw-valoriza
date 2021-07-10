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
exports.CreateTagService = void 0;
const typeorm_1 = require("typeorm");
const TagsRepositories_1 = require("../repositories/TagsRepositories");
class CreateTagService {
    execute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const tagsRepositories = typeorm_1.getCustomRepository(TagsRepositories_1.TagsRepositories);
            if (!name) {
                throw new Error("Incorrect name!");
            }
            const tagAlreadyExists = yield tagsRepositories.findOne({
                name,
            });
            if (tagAlreadyExists) {
                throw new Error("Tag already exists!");
            }
            const tag = tagsRepositories.create({
                name,
            });
            yield tagsRepositories.save(tag);
            return tag;
        });
    }
}
exports.CreateTagService = CreateTagService;
