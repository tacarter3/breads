"use strict";
const React = require('react');
const baker = require('../controllers/bakers_controller');
const Default = require('./layouts/Default');
function New({ bakers }) {
    return (React.createElement(Default, null,
        React.createElement("h2", null, "Add a new bread"),
        React.createElement("form", { action: "/breads", method: "POST" },
            React.createElement("label", { htmlFor: "name" }, "Name"),
            React.createElement("input", { type: "text", name: "name", id: "name", required: true }),
            React.createElement("label", { htmlFor: "image" }, "Image"),
            React.createElement("input", { type: "text", name: "image", id: "image" }),
            React.createElement("label", { htmlFor: "baker" }, "Baker"),
            React.createElement("select", { name: "baker", id: "baker" }, bakers.map((baker) => {
                return (React.createElement("option", { value: baker.id, key: baker.id }, baker.name));
            })),
            React.createElement("label", { htmlFor: "hasGluten" }, "Has Gluten?"),
            React.createElement("input", { type: "checkbox", name: "hasGluten", id: "hasGluten", defaultChecked: true }),
            React.createElement("br", null),
            React.createElement("input", { type: "submit" })),
        React.createElement("div", { className: "backButton" },
            React.createElement("a", { href: "/breads" },
                React.createElement("button", null, "Go back to the index")))));
}
module.exports = New;
