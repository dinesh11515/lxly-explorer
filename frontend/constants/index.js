export const bridgeHeaders = [
  { title: "Network", flexWidth: "0.25" },
  { title: "Tx Hash", flexWidth: "0.5" },
  { title: "Block", flexWidth: "0.25" },
];

export const claimHeaders = [
  { title: "Network", flexWidth: "0.25" },
  { title: "Tx Hash", flexWidth: "0.5" },
  { title: "Block", flexWidth: "0.25" },
];

export const addressPageHeaders = [
  { title: "Network", flexWidth: "0.15" },
  { title: "Tx Hash", flexWidth: "0.24" },
  { title: "Sender", flexWidth: "0.24" },
  { title: "Time", flexWidth: "0.24" },
  { title: "Block", flexWidth: "0.15" },
];

export const ZKEvmBridge = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7"; //same on goerli and zkevm

export const SERVER_URI = "https://lxly.onrender.com";

export const DUMMY_DATA_SOURCE = [
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
];

export const DUMMY_DATA_DESTINATION = [
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
];

export const ZKEvmBridgeAbi = [
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountDoesNotMatchMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "DestinationNetworkInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "EtherTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "GlobalExitRootInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSmtProof",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeFull",
    type: "error",
  },
  {
    inputs: [],
    name: "MessageFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "MsgValueNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyEmergencyState",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyNotEmergencyState",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyPolygonZkEVM",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "leafType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "depositCount",
        type: "uint32",
      },
    ],
    name: "BridgeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyStateActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyStateDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wrappedTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "NewWrappedToken",
    type: "event",
  },
  {
    inputs: [],
    name: "activateEmergencyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
    ],
    name: "bridgeAsset",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "bridgeMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimedBitMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deactivateEmergencyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "leafType",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "metadataHash",
        type: "bytes32",
      },
    ],
    name: "getLeafValue",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
    ],
    name: "getTokenWrappedAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalExitRootManager",
    outputs: [
      {
        internalType: "contract IBasePolygonZkEVMGlobalExitRoot",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_networkID",
        type: "uint32",
      },
      {
        internalType: "contract IBasePolygonZkEVMGlobalExitRoot",
        name: "_globalExitRootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_polygonZkEVMaddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isEmergencyState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdatedDepositCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkID",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "polygonZkEVMaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "precalculatedWrapperAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenInfoToWrappedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateGlobalExitRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leafHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "verifyMerkleProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wrappedTokenToTokenInfo",
    outputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
