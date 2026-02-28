import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
    {
      title: {type: String, required: true},
      price: {type: Number, required: true},
      platform: {type: String, required: true},
      inStock: {type: Boolean, required: true},
    },
    {timestamps: true}
);

export default mongoose.model('Game', GameSchema);