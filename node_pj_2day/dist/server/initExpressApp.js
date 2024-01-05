"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExpressApp = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const method_override_1 = __importDefault(require("method-override"));
function initExpressApp(app) {
    app.set('trust proxy', 1); // trust first proxy
    app.use((0, express_session_1.default)({
        secret: 'ageert3r234!@!',
        cookie: { secure: false }
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static('static'));
    app.use((0, method_override_1.default)('_method'));
}
exports.initExpressApp = initExpressApp;
//# sourceMappingURL=initExpressApp.js.map