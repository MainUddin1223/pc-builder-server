"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    port: process.env.PORT,
    database: process.env.DATABASE_URL || '',
    env: process.env.NODE_ENV,
    api_route: process.env.API_ROUTE,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.EXPIRES_IN,
};
