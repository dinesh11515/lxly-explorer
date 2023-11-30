"use client";

import React, { useEffect, useState } from "react";

import TransactionItem from "@/components/Transaction/TransactionItem";
import { useRouter } from "next/router";
import { getRequest } from "@/apis";
import { SERVER_URI } from "@/constants";
import {
  getBridgedTransactionDetails,
  getClaimedTransactionDetails,
  getTransactionDetails,
} from "@/utils/helper";
import TransactionComp from "@/components/Transaction/TransactionComp";

const Transaction = () => {
  const [currentTxInfo, setCurrentTxInfo] = useState(null);
  const [bridgedTxInfo, setBridgedTxInfo] = useState(null);
  const [claimedTxInfo, setClaimedTxInfo] = useState(null);

  const router = useRouter();
  const { transaction } = router.query;

  const setTransactionStates = (firstTx, secondTx) => {
    const bridgedTransactionDetails = getBridgedTransactionDetails({
      transaction: firstTx.transactionHash,
      blockNum: firstTx.blockNumber,
      timestamp: new Date(+(firstTx.blockTimestamp + "000")).toString(),
      data: firstTx.metadata,
      from: firstTx.from,
      network: firstTx.network,
      amount: firstTx.amount,
      gasLimit: firstTx.gasLimit,
      status: "Delivered",
    });

    if (secondTx) {
      const claimedTransactionDetails = getClaimedTransactionDetails({
        transaction: secondTx.transactionHash,
        blockNum: secondTx.blockNumber,
        timestamp: new Date(+(secondTx.blockTimestamp + "000")).toString(),
        data: secondTx.metadata,
        from: secondTx.from,
        network: secondTx.network,
        amount: secondTx.amount,
        gasLimit: secondTx.gasLimit,
        status: "Delivered",
      });

      setClaimedTxInfo(claimedTransactionDetails);
    }
    setBridgedTxInfo(bridgedTransactionDetails);
  };

  const getTransactionInfo = async () => {
    const data = await getRequest(
      `${SERVER_URI}/transaction/txHash/${transaction}`
    );

    console.log("da", data);

    if (data.currentTx.__typename === "BridgeEvent") {
      setTransactionStates(data.currentTx, data.oppositeTx);
    } else {
      setTransactionStates(data.oppositeTx, data.currentTx);
    }

    const transactionDetails = getTransactionDetails(
      data.currentTx.transactionHash,
      data.currentTx.blockNumber,
      new Date(+(data.currentTx.blockTimestamp + "000")).toString(),
      data.currentTx.depositCount
        ? data.currentTx.depositCount
        : data.currentTx.index,
      data.currentTx.from,
      data.currentTx.network
    );

    setCurrentTxInfo(transactionDetails);
  };

  // @vaibhav - Add dynamic data here
  // @aman - ok kr diya

  useEffect(() => {
    getTransactionInfo();
  }, []);

  const renderTransactionItem = (icon, label, value, isTransaction = false) => (
    <TransactionItem
      icon={icon}
      label={label}
      value={value}
      isTransaction={isTransaction}
    />
  );

  return (
    <div className="w-[90%] mx-auto font-Roboto text-white mt-8">
      <h1 className="text-xl mb-8">Transaction Details</h1>

      {currentTxInfo && (
        <TransactionComp
          title={"Basic Info"}
          transactionDetails={currentTxInfo}
          renderTransactionItem={renderTransactionItem}
        />
      )}

      <div className="pl-6 border-l-2 border-[#161616] flex flex-col gap-8 mt-8 pb-8">
        {bridgedTxInfo && (
          <TransactionComp
            title={"Bridged Transaction Info"}
            transactionDetails={bridgedTxInfo}
            renderTransactionItem={renderTransactionItem}
          />
        )}
        {claimedTxInfo && (
          <TransactionComp
            title={"Claimed Transaction Info"}
            transactionDetails={claimedTxInfo}
            renderTransactionItem={renderTransactionItem}
          />
        )}
      </div>
    </div>
  );
};

export default Transaction;
