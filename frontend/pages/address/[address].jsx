"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UserTransactionOverview from "@/components/Overview/UserTransactionOverview";
import RecentTransactionList from "@/components/RecentTrans/RecentTransactionList";
import {
  bridgeHeaders,
  claimHeaders,
  DUMMY_DATA_DESTINATION,
  DUMMY_DATA_SOURCE,
  SERVER_URI,
} from "@/constants";
import { getRequest } from "@/apis";

const Address = () => {
  const [bridgedTxDetails, setBridgedTxDetails] = useState(null);
  const [claimTxDetails, setClaimTxDetails] = useState(null);

  const router = useRouter();
  const { address } = router.query;

  const getDetails = async () => {
    const data = await getRequest(
      `${SERVER_URI}/transaction/address/${address}`
    );
    console.log("data", data);

    setBridgedTxDetails(data.bridgeTxs);
    setClaimTxDetails(data.claimTxs);
  };

  useEffect(() => {
    if (address) {
      getDetails();
    }
  }, [address]);

  return (
    <section className=" mx-auto font-Roboto ">
      <div className="py-10 w-[90%] mx-auto">
        <p className="text-xs text-[#A0A0A0]">Address</p>
        <p className="text-white text-lg">{address}</p>
      </div>

      <UserTransactionOverview />

      <div className="flex flex-col ">
        {bridgedTxDetails && bridgedTxDetails.length > 0 && (
          <RecentTransactionList
            title={"Bridged"}
            data={bridgedTxDetails}
            headers={bridgeHeaders}
          />
        )}

        <div className="-mt-20">
          {claimTxDetails && claimTxDetails.length > 0 && (
            <RecentTransactionList
              title={"Claimed"}
              data={claimTxDetails}
              headers={claimHeaders}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Address;
