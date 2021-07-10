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
exports.ListUserSendComplimentsController = void 0;
const ListUserSendComplimentsService_1 = require("../service/ListUserSendComplimentsService");
class ListUserSendComplimentsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = request;
            const listUserSendComplimentsService = new ListUserSendComplimentsService_1.ListUserSendComplimentsService();
            const compliments = yield listUserSendComplimentsService.execute(user_id);
            return response.json(compliments);
        });
    }
}
exports.ListUserSendComplimentsController = ListUserSendComplimentsController;
