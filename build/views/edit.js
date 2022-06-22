"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Default = require('./layouts/Default');
function Edit({ bread, bakers }) {
    return (react_1.default.createElement(Default, null,
        react_1.default.createElement("h2", null, "Edit a bread"),
        react_1.default.createElement("form", { action: `/breads/${bread.id}?_method=PUT`, method: "POST" },
            react_1.default.createElement("label", { htmlFor: "name" }, "Name"),
            react_1.default.createElement("input", { type: "text", name: "name", id: "name", required: true, defaultValue: bread.name }),
            react_1.default.createElement("label", { htmlFor: "image" }, "Image"),
            react_1.default.createElement("input", { type: "text", name: "image", id: "image", defaultValue: bread.image }),
            react_1.default.createElement("label", { htmlFor: "baker" }, "Baker"),
            react_1.default.createElement("select", { name: "baker", id: "baker", defaultValue: bread.baker },
                react_1.default.createElement("option", { value: "Rachel" }, "Rachel"),
                react_1.default.createElement("option", { value: "Monica" }, "Monica"),
                react_1.default.createElement("option", { value: "Joey" }, "Joey"),
                react_1.default.createElement("option", { value: "Chandler" }, "Chandler"),
                react_1.default.createElement("option", { value: "Ross" }, "Ross"),
                react_1.default.createElement("option", { value: "Phoebe" }, "Phoebe")),
            react_1.default.createElement("label", { htmlFor: "hasGluten" }, "Has Gluten?"),
            react_1.default.createElement("input", { type: "checkbox", name: "hasGluten", id: "hasGluten", defaultChecked: bread.hasGluten }),
            react_1.default.createElement("br", null),
            react_1.default.createElement("input", { type: "submit" }))));
}
module.exports = Edit;
