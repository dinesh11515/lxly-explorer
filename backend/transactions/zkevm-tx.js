import { polygonZkEvmApi, zkevmTestnetBridgeAddress } from "../constants";

export const getTransaction = async () => {
  try {
    const data = await fetch(
      `${polygonZkEvmApi}?module=account&action=txlist&address=${zkevmTestnetBridgeAddress}&sort=desc&offset=10&page=1&apikey=${process.env.ZKEVM_KEY}`
    );

    const response = await data.json();

    return response;
  } catch (error) {
    Logging.error(error);
  }
};

export const zkEvmTransactions = async () => {
  const transactions = getTransaction();

  return transactions;
};
