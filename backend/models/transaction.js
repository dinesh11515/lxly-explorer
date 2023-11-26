import mongoose, { Schema } from "mongoose";

const assetTransactionSchema = new Schema(
  {
    originAddress: {
      type: String,
    },
    originNetwork: {
      type: Number,
    },
    originTxHash: {
      type: String,
    },
    originCalledMethod: {
      type: String,
    },
    destinationAddress: {
      type: String,
    },
    destinationNetwork: {
      type: Number,
    },
    destinationTxHash: {
      type: String,
    },
    destinationCalledMethod: {
      type: String,
    },
    value: {
      type: String,
    },
    token: {
      tokenAddress: String,
      value: String,
    },
    index: {
      type: Number, //this value will be same in both bridges
    },
  },
  { timestamps: true }
);

export default mongoose.model("AssetTransaction", assetTransactionSchema);
