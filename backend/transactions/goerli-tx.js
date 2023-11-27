import { goerliApi, goerliBridgeAddress } from "../constants/index.js";
import Logging from "../lib/Logging.js";
import transaction from "../models/transaction.js";

export const getTransaction = async () => {
  try {
    const data = await fetch(
      `${goerliApi}?module=account&action=txlist&address=${goerliBridgeAddress}&sort=desc&offset=1&page=1&apikey=${process.env.GOERLI_KEY}`
    );

    const response = await data.json();

    return response;
  } catch (error) {
    Logging.error(error);
  }
};

export const goerliTransactions = async () => {
  const transcations = await getTransaction();

  return transcations;
};
