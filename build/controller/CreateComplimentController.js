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
exports.CreateComplimentController = void 0;
const CreateComplimentService_1 = require("../service/CreateComplimentService");
class CreateComplimentController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tag_id, user_receiver, message } = request.body;
            const { user_id } = request;
            const createComplimentService = new CreateComplimentService_1.CreateComplimentService();
            const compliment = yield createComplimentService.execute({
                tag_id,
                user_sender: user_id,
                user_receiver,
                message
            });
            response.json(compliment);
        });
    }
}
exports.CreateComplimentController = CreateComplimentController;
