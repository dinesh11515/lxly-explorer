import express from "express";
import {
  getRecentTransactions,
  getTransactionFromTxHash,
} from "../controllers/transcations.js";

const router = express.Router();

router.get("/recent/transactions", getRecentTransactions);

router.get("/transaction/txHash/:txHash", getTransactionFromTxHash);

export default router;
