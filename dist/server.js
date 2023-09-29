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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
let server;
process.on('uncoughtException', err => {
    console.log('-------------uncought Exception Dietected-----------', err);
    console.log(err);
    process.exit(1);
});
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(index_1.default.database);
            console.log('Database connected successfully');
            server = app_1.default.listen(index_1.default.port, () => {
                console.log(`Port is running on ${index_1.default.port}`);
            });
        }
        catch (error) {
            console.log('failed to connect', error);
        }
        process.on('unhandledRejection', error => {
            console.log('--------------unhandled rejection--------', error);
            if (server) {
                console.log(error);
                server.close();
                process.exit(1);
            }
            else {
                process.exit(1);
            }
        });
    });
}
connectDB();
process.on('SIGTERM', () => {
    console.log('SIGTURM is received');
    if (server) {
        server.close();
    }
});
