// import { goerliTransactions } from "../transactions/goerli-tx.js";
import { createClient, cacheExchange, fetchExchange } from "@urql/core";
import { graphQlApiGoerli, graphQlApiZkEvm } from "../constants/index.js";
import { recentBridgeQuery, recentClaimQuery } from "../queries/queries.js";
import Logger from "../lib/Logging.js";

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
    const recentBridgeTxGoerli = await goerliClient
      .query(recentBridgeQuery)
      .toPromise();
    const recentBridgeTxzkEvem = await zkevmClient
      .query(recentBridgeQuery)
      .toPromise();
    return res
      .status(200)
      .json({
        goerli: recentBridgeTxGoerli.data,
        zkevm: recentBridgeTxzkEvem.data,
      });
  } catch (error) {
    Logger.error(error);
  }
};
