"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const breads = require('../controllers/breads_controllers');
const Default = require('./layouts/Default');
function error404() {
    return (react_1.default.createElement(Default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "404: Page Not Found"),
            react_1.default.createElement("p", null, "Oops, sorry, we can't find this page!"))));
}
module.exports = error404;
