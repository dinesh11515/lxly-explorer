import transaction from "../models/transaction";
import { goerliTransactions } from "./goerli-tx";
import { zkEvmTransactions } from "./zkevm-tx";

export const getRecentTranasactions = async () => {
  const georliTxs = await goerliTransactions();
  const zkEvmTxs = await zkEvmTransactions();

  const claimGoerliTxs = georliTxs.result.filter((tx) =>
    tx.functionName.includes("claimAsset")
  );
  const claimzkEvmTxs = zkEvmTxs.result.filter((tx) =>
    tx.functionName.includes("claimAsset")
  );

  const bridgeGoerliTxs = georliTxs.result.filter((tx) =>
    tx.functionName.includes("bridgeAsset")
  );
  const bridgezkEvmTxs = zkEvmTxs.result.filter((tx) =>
    tx.functionName.includes("bridgeAsset")
  );

  const recentTxFromDB = await transaction.find({}).limit(10).sort({ _id: -1 });

  const newTxs = recentTxFromDB;
};
