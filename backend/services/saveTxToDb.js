import transaction from "../models/transaction.js";

export const saveBridgeAssetTx = async (
  originAddress,
  originNetwork,
  tranasctionHash,
  originCalledMethod,
  originData,
  destinationAddress,
  destinationNetwork,
  value,
  index
) => {
  const tx = new transaction({
    originAddress,
    originNetwork,
    originTxHash: tranasctionHash,
    originCalledMethod,
    originData,
    destinationAddress,
    destinationNetwork,
    value,
    index,
  });

  const newTx = await tx.save();
  console.log("new tx", newTx);
  return newTx;
};

export const saveClaimAssetTx = async (
  hash,
  destinationCalledMethod,
  destinationData,
  index
) => {
  const transactionInfo = await transaction.findOne({ index });

  if (transactionInfo) {
    transactionInfo.destinationTxHash = hash;
    transactionInfo.destinationCalledMethod = destinationCalledMethod;
    transactionInfo.destinationData = destinationData;

    await transactionInfo.save();
  }
};
