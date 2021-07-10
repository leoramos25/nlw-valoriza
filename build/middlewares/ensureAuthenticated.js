"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = jsonwebtoken_1.verify(token, "7e527a8a66a832edb5a02e935a2310b0");
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
