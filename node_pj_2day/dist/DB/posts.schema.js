"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});
exports.Post = (0, mongoose_1.model)('Post', postSchema);
//# sourceMappingURL=posts.schema.js.map