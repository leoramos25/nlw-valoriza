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
exports.AuthenticateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../repositories/UsersRepositories");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
            const user = yield usersRepositories.findOne({
                email,
            });
            if (!user) {
                throw new Error("Email/Password incorrect");
            }
            const passwordMatch = yield bcryptjs_1.compare(password, user.password);
            if (!passwordMatch) {
                throw new Error("Email/Password incorrect");
            }
            const token = jsonwebtoken_1.sign({
                email: user.email,
            }, "7e527a8a66a832edb5a02e935a2310b0", {
                subject: user.id,
                expiresIn: "1d"
            });
            return token;
        });
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
