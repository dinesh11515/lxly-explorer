import "@phala/pink-env";
import { Coders, AbiCoder, Contract, JsonRpcProvider } from "@phala/ethers";

type HexString = `0x${string}`;

const abi = [
  "function getRegisteredAddresses() public view returns (address[] memory)",
];

const contractAddress = "0xD438DD5934C6A317EAD35C0d10a61Ee39B38ae64";
const rpc = "";

const types = [
  "uint256",
  "uint256",
  "bytes32[32]",
  "uint32",
  "bytes32",
  "bytes32",
  "uint32",
  "address",
  "uint32",
  "address",
  "uint256",
  "bytes",
];
function encodeReply(data: any): HexString {
  // return Coders.encode([uintCoder, uintCoder], reply) as HexString;
  const coder = AbiCoder.defaultAbiCoder();
  return coder.encode(types, data) as HexString;
}

// Defined in OracleConsumerContract.sol
const TYPE_READY = 0;
const TYPE_NOTREADY = 2;

enum Error {
  BadRequestString = "BadRequestString",
  FailedToFetchData = "FailedToFetchData",
  FailedToDecode = "FailedToDecode",
  MalformedRequest = "MalformedRequest",
  NotReady = "NotReady",
  AlreadyClaimed = "AlreadyClaimed",
}

function fetchMerkleProofs(): any {
  const url =
    "https://bridge-api.public.zkevm-test.net/bridges/0x9A5d0A5aD88C00308C53aA0b692Af33edAe7d895";
  const merkleProofUrl =
    "https://bridge-api.public.zkevm-test.net/merkle-proof";

  let response = pink.httpRequest({
    url,
    method: "GET",
    returnTextBody: true,
  });
  console.log(response);
  if (response.statusCode !== 200) {
    throw Error.FailedToFetchData;
  }
  let respBody = response.body;
  if (typeof respBody !== "string") {
    throw Error.FailedToDecode;
  }
  respBody = JSON.parse(respBody);

  let currentDeposit = (respBody as any).deposits[0];

  if (!currentDeposit.ready_for_claim) {
    throw Error.NotReady;
  }
  if (currentDeposit.claim_tx_hash != "") {
    throw Error.AlreadyClaimed;
  }

  response = pink.httpRequest({
    url: `https://bridge-api.public.zkevm-test.net/merkle-proof?deposit_cnt=${currentDeposit.deposit_cnt}&net_id=${currentDeposit.orig_net}`,
    method: "GET",
    returnTextBody: true,
  });
  console.log(response);

  respBody = response.body;
  if (typeof respBody !== "string") {
    throw Error.FailedToDecode;
  }
  respBody = JSON.parse(respBody);
  let proof = (respBody as any).proof;
  console.log(proof);

  return [
    TYPE_READY,
    1,
    proof.merkle_proof,
    currentDeposit.deposit_cnt,
    proof.main_exit_root,
    proof.rollup_exit_root,
    currentDeposit.orig_net,
    currentDeposit.orig_addr,
    currentDeposit.dest_net,
    currentDeposit.dest_addr,
    currentDeposit.amount,
    currentDeposit.metadata,
  ];
}

export default function main(): HexString {
  try {
    // const provider = new JsonRpcProvider(
    //   "https://eth-goerli.g.alchemy.com/v2/_JhWE6m1C1VYWqcaISsadFcxyqMZ5siL"
    // );

    const autoContract = new Contract(
      contractAddress,
      abi,
      new JsonRpcProvider("goerli")
    );

    const registeredAddresses = autoContract.getRegisteredAddresses();
    console.log(registeredAddresses);
    // const respData = fetchMerkleProofs();
    // console.log("response:", respData);

    // return encodeReply(respData);
    return "" as HexString;
  } catch (error) {
    throw error;
  }
}
