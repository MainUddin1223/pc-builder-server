"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = void 0;
const mongoose_1 = require("mongoose");
const ComponentSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    keyFeatures: {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        specification: {
            type: String,
            required: true,
        },
        port: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        resolution: {
            type: String,
            required: true,
        },
        voltage: {
            type: String,
        },
    },
    individualRating: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: [],
        required: true,
    },
    quantity: {
        type: Number,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Components = (0, mongoose_1.model)('component', ComponentSchema);
