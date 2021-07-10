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
exports.ensureAdmin = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../repositories/UsersRepositories");
function ensureAdmin(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user_id } = request;
        const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
        const { admin } = yield usersRepositories.findOne(user_id);
        if (admin) {
            return next();
        }
        return response.status(401).json({
            error: "Unauthorized",
        });
    });
}
exports.ensureAdmin = ensureAdmin;
;
