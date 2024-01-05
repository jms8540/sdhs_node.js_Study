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
exports.deletePostRoute = void 0;
const mongoose_1 = require("mongoose");
const posts_schema_1 = require("../../../DB/posts.schema");
const Route_1 = require("../../../types/Route");
const { ObjectId } = mongoose_1.Types;
exports.deletePostRoute = {
    path: '/posts/:postId',
    method: Route_1.Method.DELETE,
    handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { postId: _id } = req.params;
        yield posts_schema_1.Post.deleteOne({ _id: new ObjectId(_id) });
        return res.redirect('/');
    })
};
//# sourceMappingURL=deletePost.js.map