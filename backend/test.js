import { ethers } from "ethers";

const input =
  "0xcd58657900000000000000000000000000000000000000000000000000000000000000010000000000000000000000009af3049dd15616fd627a35563b5282bea5c32e2000000000000000000000000000000000000000000000000000005af3107a40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000";

async function getData() {
  const iface = new ethers.utils.Interface([
    "function bridgeAsset(uint32 destinationNetwork,address destinationAddress,uint256 amount,address token,bool forceUpdateGlobalExitRoot,bytes permitData)",
  ]);

  const data = iface.decodeFunctionData("bridgeAsset", input);

  console.log("data is", data);
}

async function parseEvent() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-goerli.g.alchemy.com/v2/rPfyhhDXz6kKnN7XlD_vI0HOuemQf5Tj"
  );

  const receipt = await provider.getTransactionReceipt(
    "0xc02a328512c02306994c3683e704f98fc171c87d0d09846d77fa70c806de1b04"
  );

  const decodedData = ethers.utils.defaultAbiCoder.decode(
    ["uint", "uint", "address", "uint", "address", "uint", "bytes", "uint"],
    receipt.logs[0].data
  );

  console.log("event", decodedData[7].toString());
}

getData();
// parseEvent();
