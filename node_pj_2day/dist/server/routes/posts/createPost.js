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
exports.createPostRoute = void 0;
const lodash_1 = __importDefault(require("lodash"));
const posts_schema_1 = require("../../../DB/posts.schema");
const Route_1 = require("../../../types/Route");
exports.createPostRoute = {
    path: '/posts',
    method: Route_1.Method.POST,
    handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id } = req.session;
        if (_id === undefined) {
            throw new Error('401:로그인을 해주세요.');
        }
        const post = lodash_1.default.pick(req.body, ['title', 'content']);
        yield posts_schema_1.Post.create(Object.assign(Object.assign({}, post), { author: _id }));
        return res.redirect('/');
    })
};
//# sourceMappingURL=createPost.js.map