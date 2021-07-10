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
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../repositories/UsersRepositories");
const bcryptjs_1 = require("bcryptjs");
;
class CreateUserService {
    execute({ name, email, admin = false, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
            if (!email) {
                throw new Error("Email incorrect");
            }
            ;
            const userAlreadyExists = yield usersRepository.findOne({
                email,
            });
            if (userAlreadyExists) {
                throw new Error("User already exists");
            }
            const passwordHash = yield bcryptjs_1.hash(password, 8);
            const user = usersRepository.create({
                name,
                email,
                admin,
                password: passwordHash,
            });
            yield usersRepository.save(user);
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
;
