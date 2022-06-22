"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dependencies
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const Bread = require('./bread');
// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true,
    },
    bio: String
}, {
    toJSON: { virtuals: true }
});
//Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
});
// bakerSchema.pre('findOneAndDelete', function()  {
//     console.log('deleting')
// })
// hooks 
bakerSchema.post('findOneAndDelete', function () {
});
// model and export
const Baker = mongoose_1.default.model('Baker', bakerSchema);
module.exports = Baker;
