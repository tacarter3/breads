"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require mongoose 
// const mongoose = require('mongoose')
const mongoose_1 = __importDefault(require("mongoose"));
// creating shorthand for the Schema constructor 
const { Schema } = mongoose_1.default;
// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, default: false },
    image: { type: String, default: 'http://place-hold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
    }
});
// helper methods 
breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
};
// model and export
const Bread = mongoose_1.default.model('Bread', breadSchema);
module.exports = Bread;
