import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  BridgeEvent,
  ClaimEvent,
  EmergencyStateActivated,
  EmergencyStateDeactivated,
  Initialized,
  NewWrappedToken
} from "../generated/PolygonZkEVMBridge/PolygonZkEVMBridge"

export function createBridgeEventEvent(
  leafType: i32,
  originNetwork: BigInt,
  originAddress: Address,
  destinationNetwork: BigInt,
  destinationAddress: Address,
  amount: BigInt,
  metadata: Bytes,
  depositCount: BigInt
): BridgeEvent {
  let bridgeEventEvent = changetype<BridgeEvent>(newMockEvent())

  bridgeEventEvent.parameters = new Array()

  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "leafType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(leafType))
    )
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "originNetwork",
      ethereum.Value.fromUnsignedBigInt(originNetwork)
    )
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "originAddress",
      ethereum.Value.fromAddress(originAddress)
    )
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "destinationNetwork",
      ethereum.Value.fromUnsignedBigInt(destinationNetwork)
    )
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromBytes(metadata))
  )
  bridgeEventEvent.parameters.push(
    new ethereum.EventParam(
      "depositCount",
      ethereum.Value.fromUnsignedBigInt(depositCount)
    )
  )

  return bridgeEventEvent
}

export function createClaimEventEvent(
  index: BigInt,
  originNetwork: BigInt,
  originAddress: Address,
  destinationAddress: Address,
  amount: BigInt
): ClaimEvent {
  let claimEventEvent = changetype<ClaimEvent>(newMockEvent())

  claimEventEvent.parameters = new Array()

  claimEventEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  claimEventEvent.parameters.push(
    new ethereum.EventParam(
      "originNetwork",
      ethereum.Value.fromUnsignedBigInt(originNetwork)
    )
  )
  claimEventEvent.parameters.push(
    new ethereum.EventParam(
      "originAddress",
      ethereum.Value.fromAddress(originAddress)
    )
  )
  claimEventEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  claimEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEventEvent
}

export function createEmergencyStateActivatedEvent(): EmergencyStateActivated {
  let emergencyStateActivatedEvent = changetype<EmergencyStateActivated>(
    newMockEvent()
  )

  emergencyStateActivatedEvent.parameters = new Array()

  return emergencyStateActivatedEvent
}

export function createEmergencyStateDeactivatedEvent(): EmergencyStateDeactivated {
  let emergencyStateDeactivatedEvent = changetype<EmergencyStateDeactivated>(
    newMockEvent()
  )

  emergencyStateDeactivatedEvent.parameters = new Array()

  return emergencyStateDeactivatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createNewWrappedTokenEvent(
  originNetwork: BigInt,
  originTokenAddress: Address,
  wrappedTokenAddress: Address,
  metadata: Bytes
): NewWrappedToken {
  let newWrappedTokenEvent = changetype<NewWrappedToken>(newMockEvent())

  newWrappedTokenEvent.parameters = new Array()

  newWrappedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "originNetwork",
      ethereum.Value.fromUnsignedBigInt(originNetwork)
    )
  )
  newWrappedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "originTokenAddress",
      ethereum.Value.fromAddress(originTokenAddress)
    )
  )
  newWrappedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "wrappedTokenAddress",
      ethereum.Value.fromAddress(wrappedTokenAddress)
    )
  )
  newWrappedTokenEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromBytes(metadata))
  )

  return newWrappedTokenEvent
}
