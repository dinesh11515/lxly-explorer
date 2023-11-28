import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { BridgeEvent } from "../generated/schema"
import { BridgeEvent as BridgeEventEvent } from "../generated/PolygonZkEVMBridge/PolygonZkEVMBridge"
import { handleBridgeEvent } from "../src/polygon-zk-evm-bridge"
import { createBridgeEventEvent } from "./polygon-zk-evm-bridge-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let leafType = 123
    let originNetwork = BigInt.fromI32(234)
    let originAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let destinationNetwork = BigInt.fromI32(234)
    let destinationAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let metadata = Bytes.fromI32(1234567890)
    let depositCount = BigInt.fromI32(234)
    let newBridgeEventEvent = createBridgeEventEvent(
      leafType,
      originNetwork,
      originAddress,
      destinationNetwork,
      destinationAddress,
      amount,
      metadata,
      depositCount
    )
    handleBridgeEvent(newBridgeEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BridgeEvent created and stored", () => {
    assert.entityCount("BridgeEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "leafType",
      "123"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "originNetwork",
      "234"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "originAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "destinationNetwork",
      "234"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "destinationAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "metadata",
      "1234567890"
    )
    assert.fieldEquals(
      "BridgeEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "depositCount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
