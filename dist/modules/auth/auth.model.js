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
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const AuthSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: 'user',
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dld6ete1x/image/upload/v1692849444/3135715_qahlxx.png',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// AuthSchema.methods.isUserExist = async function (
//   email: string,
// ): Promise<IUser | null> {
//   const admin = await User.findOne(
//     { phoneNumber },
//     { _id: 1, password: 1, role: 1, name: 1 },
//   );
//   return admin;
// };
AuthSchema.methods.isPasswordMatched = function (password, savedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isPasswordMatch = yield bcrypt_1.default.compare(password, savedPassword);
        return isPasswordMatch;
    });
};
AuthSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
exports.User = (0, mongoose_1.model)('auth', AuthSchema);