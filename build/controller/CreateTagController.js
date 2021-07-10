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
exports.CreateTagController = void 0;
const CreateTagService_1 = require("../service/CreateTagService");
class CreateTagController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const createTagService = new CreateTagService_1.CreateTagService();
            const tag = yield createTagService.execute(name);
            return response.json(tag);
        });
    }
    ;
}
exports.CreateTagController = CreateTagController;
