"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Default = require('./layouts/Default');
function Show({ baker }) {
    return (react_1.default.createElement(Default, null,
        react_1.default.createElement("h3", null, baker.name),
        react_1.default.createElement("p", null,
            baker.name,
            " has been baking with us since ",
            baker.startDate.getFullYear()),
        react_1.default.createElement("p", null,
            "About ",
            baker.name,
            ": ",
            baker.bio),
        react_1.default.createElement("h3", null,
            "Breads ",
            baker.name,
            " has baked"),
        react_1.default.createElement("ul", null, baker.breads.map((bread) => {
            return (react_1.default.createElement("li", { key: bread.id }, bread.name));
        })),
        react_1.default.createElement("form", { action: `/bakers/${baker.id}?_method=DELETE`, method: "POST" },
            react_1.default.createElement("input", { type: "submit", value: "DELETE" }))));
}
module.exports = Show;
