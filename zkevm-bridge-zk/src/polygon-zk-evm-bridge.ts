import {
  BridgeEvent as BridgeEventEvent,
  ClaimEvent as ClaimEventEvent,
  EmergencyStateActivated as EmergencyStateActivatedEvent,
  EmergencyStateDeactivated as EmergencyStateDeactivatedEvent,
  Initialized as InitializedEvent,
  NewWrappedToken as NewWrappedTokenEvent
} from "../generated/PolygonZkEVMBridge/PolygonZkEVMBridge"
import {
  BridgeEvent,
  ClaimEvent,
  EmergencyStateActivated,
  EmergencyStateDeactivated,
  Initialized,
  NewWrappedToken
} from "../generated/schema"

export function handleBridgeEvent(event: BridgeEventEvent): void {
  let entity = new BridgeEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.leafType = event.params.leafType
  entity.originNetwork = event.params.originNetwork
  entity.originAddress = event.params.originAddress
  entity.destinationNetwork = event.params.destinationNetwork
  entity.destinationAddress = event.params.destinationAddress
  entity.amount = event.params.amount
  entity.metadata = event.params.metadata
  entity.depositCount = event.params.depositCount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimEvent(event: ClaimEventEvent): void {
  let entity = new ClaimEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.originNetwork = event.params.originNetwork
  entity.originAddress = event.params.originAddress
  entity.destinationAddress = event.params.destinationAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyStateActivated(
  event: EmergencyStateActivatedEvent
): void {
  let entity = new EmergencyStateActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyStateDeactivated(
  event: EmergencyStateDeactivatedEvent
): void {
  let entity = new EmergencyStateDeactivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewWrappedToken(event: NewWrappedTokenEvent): void {
  let entity = new NewWrappedToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.originNetwork = event.params.originNetwork
  entity.originTokenAddress = event.params.originTokenAddress
  entity.wrappedTokenAddress = event.params.wrappedTokenAddress
  entity.metadata = event.params.metadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
