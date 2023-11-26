import express from "express";
import { getRecentTransactions } from "../controllers/transcations.js";

const router = express.Router();

router.get("/recent/transactions", getRecentTransactions);

export default router;
