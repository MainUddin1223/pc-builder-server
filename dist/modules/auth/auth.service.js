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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const config_1 = __importDefault(require("../../config"));
const jwtToken_1 = require("../../utils/jwtToken");
const auth_model_1 = require("./auth.model");
const includeJwt = (_id, email) => {
    const token = jwtToken_1.jwtHelpers.createToken({ _id, email }, config_1.default.jwtSecret, config_1.default.jwtExpiresIn);
    return token;
};
const auth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield auth_model_1.User.findOne({ email: payload.email });
    if (isUserExist) {
        const id = isUserExist._id.toString();
        const token = includeJwt(id, isUserExist.email);
        isUserExist.password = '';
        return { isUserExist, token };
    }
    else {
        const result = yield auth_model_1.User.create(payload);
        const id = result._id.toString();
        const token = includeJwt(id, result.email);
        result.password = '';
        return { result, token };
    }
});
exports.authService = { auth };
