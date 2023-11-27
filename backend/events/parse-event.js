import { ethers } from "ethers";
import {
  bridgeABI,
  goerliBridgeAddress,
  zkevmTestnetBridgeAddress,
} from "../constants/index.js";
import { goerliTransactions } from "../transactions/goerli-tx.js";
import { saveBridgeAssetTx, saveClaimAssetTx } from "../services/saveTxToDb.js";
import { zkEvmTransactions } from "../transactions/zkevm-tx.js";

export const goerliEventListener = async () => {
  const provider = new ethers.providers.WebSocketProvider(
    "wss://eth-goerli.g.alchemy.com/v2/g5Y7vt3kyldyLOtvezDGkqG36VTxaHV-"
  );

  const contract = new ethers.Contract(
    goerliBridgeAddress,
    bridgeABI,
    provider
  );

  contract.on(
    "BridgeEvent",
    async (
      leafType,
      originNetwork,
      originAddress,
      destinationNetwork,
      destinationAddress,
      amount,
      metadata,
      depositCount
    ) => {
      console.log("hello", {
        leafType,
        originNetwork,
        originAddress,
        destinationAddress,
        destinationNetwork,
        amount,
        metadata,
        depositCount,
      });
      const transactions = await goerliTransactions();

      const txInfo = transactions.result[0];

      console.log("txInfo", txInfo);

      //0 for goerli 1 for zkevm
      if (txInfo.functionName.includes("bridgeAsset")) {
        const parsedInput = parseBridgeAssetInput(txInfo.input);
        console.log("pp", parsedInput);

        saveBridgeAssetTx(
          txInfo.from,
          originNetwork,
          txInfo.hash,
          txInfo.functionName,
          parsedInput,
          destinationAddress,
          destinationNetwork,
          amount,
          depositCount
        );
      }
    }
  );

  contract.on(
    "ClaimEvent",
    async (index, originNetwork, originAddress, destinationAddress, amount) => {
      const transactions = await zkEvmTransactions();

      const txInfo = transactions.result[0];

      if (txInfo.functionName.includes("claimAsset")) {
        const parsedInput = parseClaimAssetInput(txInfo.input);

        saveClaimAssetTx(txInfo.hash, txInfo.functionName, parsedInput, index);
      }
    }
  );
};

export const parseBridgeAssetInput = (input) => {
  const iface = new ethers.utils.Interface([
    "function bridgeAsset(uint32 destinationNetwork,address destinationAddress,uint256 amount,address token,bool forceUpdateGlobalExitRoot,bytes permitData)",
  ]);

  const data = iface.decodeFunctionData("bridgeAsset", input);

  console.log("data is", data);

  return data;
};

export const parseClaimAssetInput = (input) => {
  const iface = new ethers.utils.Interface([
    "function claimAsset(bytes32[32] smtProof,uint32 index,bytes32 mainnetExitRoot,bytes32 rollupExitRoot,uint32 originNetwork,address originTokenAddress,uint32 destinationNetwork,address destinationAddress,uint256 amount,bytes metadata)",
  ]);

  const data = iface.decodeFunctionData("claimAsset", input);

  return data;
};
