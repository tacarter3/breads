"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const React = require('react')
const react_1 = __importDefault(require("react"));
const Default = require('./layouts/Default');
function Show({ bread }) {
    console.log(bread.name);
    return (react_1.default.createElement(Default, null,
        react_1.default.createElement("h2", null, "Show Page"),
        react_1.default.createElement("h3", null, bread.name),
        react_1.default.createElement("p", null,
            "and it",
            bread.hasGluten
                ? react_1.default.createElement("span", null, " does have gluten ")
                : react_1.default.createElement("span", null, " does Not have gluten ")),
        react_1.default.createElement("img", { src: bread.image, alt: bread.name }),
        react_1.default.createElement("p", null, bread.getBakedBy()),
        react_1.default.createElement("a", { href: `/breads/${bread.id}/edit` },
            react_1.default.createElement("button", null, "Edit")),
        react_1.default.createElement("form", { action: `/breads/${bread.id}?_method=DELETE`, method: "POST" },
            react_1.default.createElement("input", { type: 'submit', value: "DELETE" }))));
}
module.exports = Show;
