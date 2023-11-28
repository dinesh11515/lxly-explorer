// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BridgeEvent extends ethereum.Event {
  get params(): BridgeEvent__Params {
    return new BridgeEvent__Params(this);
  }
}

export class BridgeEvent__Params {
  _event: BridgeEvent;

  constructor(event: BridgeEvent) {
    this._event = event;
  }

  get leafType(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get originNetwork(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get originAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get destinationNetwork(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get destinationAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get metadata(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get depositCount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class ClaimEvent extends ethereum.Event {
  get params(): ClaimEvent__Params {
    return new ClaimEvent__Params(this);
  }
}

export class ClaimEvent__Params {
  _event: ClaimEvent;

  constructor(event: ClaimEvent) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get originNetwork(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get originAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get destinationAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class EmergencyStateActivated extends ethereum.Event {
  get params(): EmergencyStateActivated__Params {
    return new EmergencyStateActivated__Params(this);
  }
}

export class EmergencyStateActivated__Params {
  _event: EmergencyStateActivated;

  constructor(event: EmergencyStateActivated) {
    this._event = event;
  }
}

export class EmergencyStateDeactivated extends ethereum.Event {
  get params(): EmergencyStateDeactivated__Params {
    return new EmergencyStateDeactivated__Params(this);
  }
}

export class EmergencyStateDeactivated__Params {
  _event: EmergencyStateDeactivated;

  constructor(event: EmergencyStateDeactivated) {
    this._event = event;
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class NewWrappedToken extends ethereum.Event {
  get params(): NewWrappedToken__Params {
    return new NewWrappedToken__Params(this);
  }
}

export class NewWrappedToken__Params {
  _event: NewWrappedToken;

  constructor(event: NewWrappedToken) {
    this._event = event;
  }

  get originNetwork(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get originTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wrappedTokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get metadata(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class PolygonZkEVMBridge__wrappedTokenToTokenInfoResult {
  value0: BigInt;
  value1: Address;

  constructor(value0: BigInt, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getOriginNetwork(): BigInt {
    return this.value0;
  }

  getOriginTokenAddress(): Address {
    return this.value1;
  }
}

export class PolygonZkEVMBridge extends ethereum.SmartContract {
  static bind(address: Address): PolygonZkEVMBridge {
    return new PolygonZkEVMBridge("PolygonZkEVMBridge", address);
  }

  claimedBitMap(param0: BigInt): BigInt {
    let result = super.call(
      "claimedBitMap",
      "claimedBitMap(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_claimedBitMap(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimedBitMap",
      "claimedBitMap(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositCount(): BigInt {
    let result = super.call("depositCount", "depositCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_depositCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("depositCount", "depositCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDepositRoot(): Bytes {
    let result = super.call("getDepositRoot", "getDepositRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_getDepositRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getDepositRoot",
      "getDepositRoot():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getLeafValue(
    leafType: i32,
    originNetwork: BigInt,
    originAddress: Address,
    destinationNetwork: BigInt,
    destinationAddress: Address,
    amount: BigInt,
    metadataHash: Bytes
  ): Bytes {
    let result = super.call(
      "getLeafValue",
      "getLeafValue(uint8,uint32,address,uint32,address,uint256,bytes32):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(leafType)),
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originAddress),
        ethereum.Value.fromUnsignedBigInt(destinationNetwork),
        ethereum.Value.fromAddress(destinationAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromFixedBytes(metadataHash)
      ]
    );

    return result[0].toBytes();
  }

  try_getLeafValue(
    leafType: i32,
    originNetwork: BigInt,
    originAddress: Address,
    destinationNetwork: BigInt,
    destinationAddress: Address,
    amount: BigInt,
    metadataHash: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getLeafValue",
      "getLeafValue(uint8,uint32,address,uint32,address,uint256,bytes32):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(leafType)),
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originAddress),
        ethereum.Value.fromUnsignedBigInt(destinationNetwork),
        ethereum.Value.fromAddress(destinationAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromFixedBytes(metadataHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTokenWrappedAddress(
    originNetwork: BigInt,
    originTokenAddress: Address
  ): Address {
    let result = super.call(
      "getTokenWrappedAddress",
      "getTokenWrappedAddress(uint32,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originTokenAddress)
      ]
    );

    return result[0].toAddress();
  }

  try_getTokenWrappedAddress(
    originNetwork: BigInt,
    originTokenAddress: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenWrappedAddress",
      "getTokenWrappedAddress(uint32,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originTokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  globalExitRootManager(): Address {
    let result = super.call(
      "globalExitRootManager",
      "globalExitRootManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_globalExitRootManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "globalExitRootManager",
      "globalExitRootManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isClaimed(index: BigInt): boolean {
    let result = super.call("isClaimed", "isClaimed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBoolean();
  }

  try_isClaimed(index: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isClaimed", "isClaimed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isEmergencyState(): boolean {
    let result = super.call(
      "isEmergencyState",
      "isEmergencyState():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isEmergencyState(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isEmergencyState",
      "isEmergencyState():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastUpdatedDepositCount(): BigInt {
    let result = super.call(
      "lastUpdatedDepositCount",
      "lastUpdatedDepositCount():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastUpdatedDepositCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdatedDepositCount",
      "lastUpdatedDepositCount():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  networkID(): BigInt {
    let result = super.call("networkID", "networkID():(uint32)", []);

    return result[0].toBigInt();
  }

  try_networkID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("networkID", "networkID():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  polygonZkEVMaddress(): Address {
    let result = super.call(
      "polygonZkEVMaddress",
      "polygonZkEVMaddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_polygonZkEVMaddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "polygonZkEVMaddress",
      "polygonZkEVMaddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  precalculatedWrapperAddress(
    originNetwork: BigInt,
    originTokenAddress: Address,
    name: string,
    symbol: string,
    decimals: i32
  ): Address {
    let result = super.call(
      "precalculatedWrapperAddress",
      "precalculatedWrapperAddress(uint32,address,string,string,uint8):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originTokenAddress),
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals))
      ]
    );

    return result[0].toAddress();
  }

  try_precalculatedWrapperAddress(
    originNetwork: BigInt,
    originTokenAddress: Address,
    name: string,
    symbol: string,
    decimals: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "precalculatedWrapperAddress",
      "precalculatedWrapperAddress(uint32,address,string,string,uint8):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(originNetwork),
        ethereum.Value.fromAddress(originTokenAddress),
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenInfoToWrappedToken(param0: Bytes): Address {
    let result = super.call(
      "tokenInfoToWrappedToken",
      "tokenInfoToWrappedToken(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toAddress();
  }

  try_tokenInfoToWrappedToken(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenInfoToWrappedToken",
      "tokenInfoToWrappedToken(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyMerkleProof(
    leafHash: Bytes,
    smtProof: Array<Bytes>,
    index: BigInt,
    root: Bytes
  ): boolean {
    let result = super.call(
      "verifyMerkleProof",
      "verifyMerkleProof(bytes32,bytes32[32],uint32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(leafHash),
        ethereum.Value.fromFixedBytesArray(smtProof),
        ethereum.Value.fromUnsignedBigInt(index),
        ethereum.Value.fromFixedBytes(root)
      ]
    );

    return result[0].toBoolean();
  }

  try_verifyMerkleProof(
    leafHash: Bytes,
    smtProof: Array<Bytes>,
    index: BigInt,
    root: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyMerkleProof",
      "verifyMerkleProof(bytes32,bytes32[32],uint32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(leafHash),
        ethereum.Value.fromFixedBytesArray(smtProof),
        ethereum.Value.fromUnsignedBigInt(index),
        ethereum.Value.fromFixedBytes(root)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  wrappedTokenToTokenInfo(
    param0: Address
  ): PolygonZkEVMBridge__wrappedTokenToTokenInfoResult {
    let result = super.call(
      "wrappedTokenToTokenInfo",
      "wrappedTokenToTokenInfo(address):(uint32,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new PolygonZkEVMBridge__wrappedTokenToTokenInfoResult(
      result[0].toBigInt(),
      result[1].toAddress()
    );
  }

  try_wrappedTokenToTokenInfo(
    param0: Address
  ): ethereum.CallResult<PolygonZkEVMBridge__wrappedTokenToTokenInfoResult> {
    let result = super.tryCall(
      "wrappedTokenToTokenInfo",
      "wrappedTokenToTokenInfo(address):(uint32,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PolygonZkEVMBridge__wrappedTokenToTokenInfoResult(
        value[0].toBigInt(),
        value[1].toAddress()
      )
    );
  }
}

export class ActivateEmergencyStateCall extends ethereum.Call {
  get inputs(): ActivateEmergencyStateCall__Inputs {
    return new ActivateEmergencyStateCall__Inputs(this);
  }

  get outputs(): ActivateEmergencyStateCall__Outputs {
    return new ActivateEmergencyStateCall__Outputs(this);
  }
}

export class ActivateEmergencyStateCall__Inputs {
  _call: ActivateEmergencyStateCall;

  constructor(call: ActivateEmergencyStateCall) {
    this._call = call;
  }
}

export class ActivateEmergencyStateCall__Outputs {
  _call: ActivateEmergencyStateCall;

  constructor(call: ActivateEmergencyStateCall) {
    this._call = call;
  }
}

export class BridgeAssetCall extends ethereum.Call {
  get inputs(): BridgeAssetCall__Inputs {
    return new BridgeAssetCall__Inputs(this);
  }

  get outputs(): BridgeAssetCall__Outputs {
    return new BridgeAssetCall__Outputs(this);
  }
}

export class BridgeAssetCall__Inputs {
  _call: BridgeAssetCall;

  constructor(call: BridgeAssetCall) {
    this._call = call;
  }

  get destinationNetwork(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get destinationAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get forceUpdateGlobalExitRoot(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get permitData(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class BridgeAssetCall__Outputs {
  _call: BridgeAssetCall;

  constructor(call: BridgeAssetCall) {
    this._call = call;
  }
}

export class BridgeMessageCall extends ethereum.Call {
  get inputs(): BridgeMessageCall__Inputs {
    return new BridgeMessageCall__Inputs(this);
  }

  get outputs(): BridgeMessageCall__Outputs {
    return new BridgeMessageCall__Outputs(this);
  }
}

export class BridgeMessageCall__Inputs {
  _call: BridgeMessageCall;

  constructor(call: BridgeMessageCall) {
    this._call = call;
  }

  get destinationNetwork(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get destinationAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get forceUpdateGlobalExitRoot(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get metadata(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class BridgeMessageCall__Outputs {
  _call: BridgeMessageCall;

  constructor(call: BridgeMessageCall) {
    this._call = call;
  }
}

export class ClaimAssetCall extends ethereum.Call {
  get inputs(): ClaimAssetCall__Inputs {
    return new ClaimAssetCall__Inputs(this);
  }

  get outputs(): ClaimAssetCall__Outputs {
    return new ClaimAssetCall__Outputs(this);
  }
}

export class ClaimAssetCall__Inputs {
  _call: ClaimAssetCall;

  constructor(call: ClaimAssetCall) {
    this._call = call;
  }

  get smtProof(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get mainnetExitRoot(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get rollupExitRoot(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get originNetwork(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get originTokenAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get destinationNetwork(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get destinationAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get metadata(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class ClaimAssetCall__Outputs {
  _call: ClaimAssetCall;

  constructor(call: ClaimAssetCall) {
    this._call = call;
  }
}

export class ClaimMessageCall extends ethereum.Call {
  get inputs(): ClaimMessageCall__Inputs {
    return new ClaimMessageCall__Inputs(this);
  }

  get outputs(): ClaimMessageCall__Outputs {
    return new ClaimMessageCall__Outputs(this);
  }
}

export class ClaimMessageCall__Inputs {
  _call: ClaimMessageCall;

  constructor(call: ClaimMessageCall) {
    this._call = call;
  }

  get smtProof(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get mainnetExitRoot(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get rollupExitRoot(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get originNetwork(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get originAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get destinationNetwork(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get destinationAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get metadata(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class ClaimMessageCall__Outputs {
  _call: ClaimMessageCall;

  constructor(call: ClaimMessageCall) {
    this._call = call;
  }
}

export class DeactivateEmergencyStateCall extends ethereum.Call {
  get inputs(): DeactivateEmergencyStateCall__Inputs {
    return new DeactivateEmergencyStateCall__Inputs(this);
  }

  get outputs(): DeactivateEmergencyStateCall__Outputs {
    return new DeactivateEmergencyStateCall__Outputs(this);
  }
}

export class DeactivateEmergencyStateCall__Inputs {
  _call: DeactivateEmergencyStateCall;

  constructor(call: DeactivateEmergencyStateCall) {
    this._call = call;
  }
}

export class DeactivateEmergencyStateCall__Outputs {
  _call: DeactivateEmergencyStateCall;

  constructor(call: DeactivateEmergencyStateCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _networkID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _globalExitRootManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _polygonZkEVMaddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class UpdateGlobalExitRootCall extends ethereum.Call {
  get inputs(): UpdateGlobalExitRootCall__Inputs {
    return new UpdateGlobalExitRootCall__Inputs(this);
  }

  get outputs(): UpdateGlobalExitRootCall__Outputs {
    return new UpdateGlobalExitRootCall__Outputs(this);
  }
}

export class UpdateGlobalExitRootCall__Inputs {
  _call: UpdateGlobalExitRootCall;

  constructor(call: UpdateGlobalExitRootCall) {
    this._call = call;
  }
}

export class UpdateGlobalExitRootCall__Outputs {
  _call: UpdateGlobalExitRootCall;

  constructor(call: UpdateGlobalExitRootCall) {
    this._call = call;
  }
}
