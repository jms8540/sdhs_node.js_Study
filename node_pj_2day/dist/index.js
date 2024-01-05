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
const express_1 = __importDefault(require("express"));
const connect_1 = require("./DB/connect");
const initExpressApp_1 = require("./server/initExpressApp");
const createPost_1 = require("./server/routes/posts/createPost");
const deletePost_1 = require("./server/routes/posts/deletePost");
const routes = [
    createPost_1.createPostRoute,
    deletePost_1.deletePostRoute
];
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        console.log('DB 접속 시도');
        yield (0, connect_1.connectDB)();
        console.log('DB 접속 완료');
        (0, initExpressApp_1.initExpressApp)(app);
        routes.forEach(route => {
            app[route.method](route.path, (req, res) => {
                route.handler(req, res)
                    .catch((err) => {
                    console.error('Api Error', err);
                    const [statusCode, errorMessage] = err.message.split(':');
                    return res
                        .status(statusCode)
                        .json({
                        success: false,
                        message: errorMessage
                    });
                });
            });
        });
        const port = 3000;
        app.listen(port, () => {
            console.log(`App is running on port: ${port}`);
        });
    });
}
bootstrap()
    .catch(err => {
    console.error('에러 발생!', err);
});
//npm i mongoose
//qSIYNOQ8Ot52Icdt
//# sourceMappingURL=index.js.map