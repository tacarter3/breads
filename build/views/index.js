"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const breads = require('../controllers/breads_controllers');
const Default = require('./layouts/Default');
function Index({ breads, bakers, title }) {
    return (react_1.default.createElement(Default, { title: title },
        react_1.default.createElement("h2", null, "Index Page!"),
        react_1.default.createElement("h3", null, "Bakers"),
        react_1.default.createElement("ul", null, bakers.map((baker) => {
            return (react_1.default.createElement("li", { key: baker._id },
                react_1.default.createElement("a", { href: `/bakers/${baker._id}` }, baker.name)));
        })),
        react_1.default.createElement("h3", null, "Breads"),
        react_1.default.createElement("ul", null, breads.map((bread) => {
            return (react_1.default.createElement("li", { key: bread._id },
                react_1.default.createElement("a", { href: `/breads/${bread._id}` }, bread.name)));
        })),
        react_1.default.createElement("div", { className: "newButton" },
            react_1.default.createElement("a", { href: "/breads/new" },
                react_1.default.createElement("button", null, "Add a new bread")))));
}
module.exports = Index;
