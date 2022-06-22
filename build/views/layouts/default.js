"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const React = require('react')
const react_1 = __importDefault(require("react"));
function Default(html) {
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, html.title || 'Default'),
            react_1.default.createElement("link", { rel: "icon", href: "/images/favicon (3).ico" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css", integrity: "sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==", crossOrigin: "anonymous" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css", integrity: "sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==", crossOrigin: "anonymous" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "/main.css" })),
        react_1.default.createElement("body", null,
            react_1.default.createElement("div", { className: "wrapper" },
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null,
                        react_1.default.createElement("a", { href: "/breads" }, "BreadCRUD"))),
                react_1.default.createElement("div", { className: "container" }, html.children)))));
}
module.exports = Default;
