import { gql } from "@urql/core";

export const bridgeQuery = gql`
  query bridgeQuery {
    bridgeEvents {
      id
      leafType
      originNetwork
      originAddress
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
    }
  }
`;

export const bridgeQueryFromTxHash = gql`
  query bridgeQuery($transactionHash: Bytes!) {
    bridgeEvents(where: { transactionHash: $transactionHash }) {
      id
      depositCount
      originNetwork
      destinationAddress
    }
  }
`;

export const claimQueryFromTxHash = gql`
  query claimQuery($transactionHash: Bytes!) {
    claimEvents(where: { transactionHash: $transactionHash }) {
      id
      index
      originNetwork
      destinationAddress
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
    }
  }
`;
