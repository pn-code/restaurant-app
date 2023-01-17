import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 60,
        },
        description: {
            type: String,
            required: true,
            maxLength: 200,
        },
        image: {
            type: String,
            required: true,
        },
        prices: {
            type: [Number],
            required: true,
        },
        combo: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
