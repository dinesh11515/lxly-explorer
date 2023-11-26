import { goerliTransactions } from "../transactions/goerli-tx.js";

export const getRecentTransactions = async (req, res, next) => {
  const transcations = await goerliTransactions();

  return res.json({ transcations });
};
