import { gql } from "@urql/core";

export const bridgeQuery = gql`
  query bridgeQuery {
    bridgeEvents {
      id
      leafType
      originNetwork
      originAddress
      blockTimestamp
      network
    }
  }
`;

export const claimQuery = gql`
  query claimQuery {
    claimEvents {
      id
      index
      originNetwork
      destinationAddress
      blockTimestamp
      network
    }
  }
`;

export const bridgeQueryFromTxHash = gql`
  query bridgeQuery($txHash: String!) {
    bridgeEvents(where: { transactionHash: $txHash }) {
      id
      depositCount
      originNetwork
      destinationAddress
      blockTimestamp
      network
      blockNumber
    }
  }
`;

export const claimQueryFromTxHash = gql`
  query claimQuery($txHash: String!) {
    claimEvents(where: { transactionHash: $txHash }) {
      id
      index
      originNetwork
      destinationAddress
      blockTimestamp
      network
      blockNumber
    }
  }
`;

export const bridgeQueryFromIndex = gql`
  query bridgeQuery($index: BigInt!) {
    bridgeEvents(where: { depositCount: $index }) {
      id
      depositCount
      originNetwork
      destinationAddress
      blockTimestamp
      network
    }
  }
`;

export const claimQueryFromIndex = gql`
  query claimQuery($index: BigInt!) {
    claimEvents(where: { index: $index }) {
      id
      index
      originNetwork
      destinationAddress
      blockTimestamp
      network
    }
  }
`;

export const recentBridgeQuery = gql`
  query bridgeQuery {
    bridgeEvents(orderBy: blockNumber, orderDirection: desc, first: 10) {
      id
      depositCount
      originNetwork
      destinationAddress
      blockTimestamp
      network
      blockNumber
      transactionHash
    }
  }
`;

export const recentClaimQuery = gql`
  query claimQuery {
    claimEvents(orderBy: blockNumber, orderDirection: desc, first: 10) {
      id
      index
      originNetwork
      destinationAddress
      blockTimestamp
      network
      blockNumber
      transactionHash
    }
  }
`;

export const bridgeQueryFromAddress = gql`
  query bridgeQuery($address: Bytes!) {
    bridgeEvents(
      where: { or: { destinationAddress: $address, originAddress: $address } }
    ) {
      id
      depositCount
      originNetwork
      destinationAddress
      blockTimestamp
      network
    }
  }
`;

export const claimQueryFromAddress = gql`
  query claimQuery($address: Bytes!) {
    claimEvents(
      where: { or: { destinationAddress: $address, originAddress: $address } }
    ) {
      id
      index
      originNetwork
      destinationAddress
      blockTimestamp
      network
    }
  }
`;
