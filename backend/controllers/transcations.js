import { createClient, cacheExchange, fetchExchange } from "@urql/core";
import { graphQlApiGoerli, graphQlApiZkEvm } from "../constants/index.js";
import {
  bridgeQueryFromIndex,
  bridgeQueryFromTxHash,
  claimQuery,
  claimQueryFromIndex,
  claimQueryFromTxHash,
  recentBridgeQuery,
  recentClaimQuery,
} from "../queries/queries.js";
import Logger from "../lib/Logging.js";
import Logging from "../lib/Logging.js";

export const getRecentTransactions = async (req, res, next) => {
  try {
    const goerliClient = createClient({
      url: graphQlApiGoerli,
      exchanges: [cacheExchange, fetchExchange],
    });
    const zkevmClient = createClient({
      url: graphQlApiZkEvm,
      exchanges: [cacheExchange, fetchExchange],
    });

    let [
      recentBridgeTxGoerli,
      recentBridgeTxzkEvm,
      recentClaimTxGoerli,
      recentClaimTxzkEvm,
    ] = await Promise.all([
      goerliClient.query(recentBridgeQuery).toPromise(),
      zkevmClient.query(recentBridgeQuery).toPromise(),
      goerliClient.query(recentClaimQuery).toPromise(),
      zkevmClient.query(recentClaimQuery).toPromise(),
    ]);

    const recentBridgeTxs = [
        ...recentBridgeTxGoerli.data.bridgeEvents,
        ...recentBridgeTxzkEvm.data.bridgeEvents,
      ],
      recentClaimTxs = [
        ...recentClaimTxGoerli.data.claimEvents,
        ...recentClaimTxzkEvm.data.claimEvents,
      ];

    recentBridgeTxs.sort(
      (a, b) => Number(b.blockTimestamp) - Number(a.blockTimestamp)
    );

    recentClaimTxs.sort(
      (a, b) => Number(b.blockTimestamp) - Number(a.blockTimestamp)
    );

    return res.status(200).json({
      bridgeTxs: recentBridgeTxs,
      claimTxs: recentClaimTxs,
    });
  } catch (error) {
    Logger.error(error);
  }
};

export const getTransactionFromTxHash = async (req, res, next) => {
  try {
    const { txHash } = req.params;

    const goerliClient = createClient({
      url: graphQlApiGoerli,
      exchanges: [cacheExchange, fetchExchange],
    });
    const zkevmClient = createClient({
      url: graphQlApiZkEvm,
      exchanges: [cacheExchange, fetchExchange],
    });

    const [txBridgeGoerli, txBridgezkEvm, txClaimGoerli, txClaimzkEvm] =
      await Promise.all([
        (
          await goerliClient
            .query(bridgeQueryFromTxHash, { txHash })
            .toPromise()
        ).data.bridgeEvents,
        (
          await zkevmClient.query(bridgeQueryFromTxHash, { txHash }).toPromise()
        ).data.bridgeEvents,
        (
          await goerliClient.query(claimQueryFromTxHash, { txHash }).toPromise()
        ).data.claimEvents,
        (
          await zkevmClient.query(claimQueryFromTxHash, { txHash }).toPromise()
        ).data.claimEvents,
      ]);

    let index, oppositeBridgeTx, currentTx;

    if (txBridgeGoerli.length > 0) {
      index = txBridgeGoerli[0].depositCount;

      currentTx = txBridgeGoerli[0];

      oppositeBridgeTx = (
        await zkevmClient.query(claimQueryFromIndex, { index }).toPromise()
      ).data.bridgeEvents;
    } else if (txBridgezkEvm.length > 0) {
      index = txBridgezkEvm[0].depositCount;

      currentTx = txBridgezkEvm[0];
      oppositeBridgeTx = (
        await goerliClient.query(claimQueryFromIndex, { index }).toPromise()
      ).data.claimEvents;
    } else if (txClaimGoerli.length > 0) {
      index = txClaimGoerli[0].index;

      currentTx = txClaimGoerli[0];

      oppositeBridgeTx = (
        await zkevmClient.query(bridgeQueryFromIndex, { index }).toPromise()
      ).data.bridgeEvents;
    } else if (txClaimzkEvm.length > 0) {
      index = txClaimzkEvm[0].index;

      currentTx = txClaimzkEvm[0];

      oppositeBridgeTx = (
        await goerliClient.query(bridgeQueryFromIndex, { index }).toPromise()
      ).data.claimEvents;
    }

    return res.status(200).json({ currentTx, oppositeBridgeTx });
  } catch (error) {
    Logging.error(error);
  }
};
