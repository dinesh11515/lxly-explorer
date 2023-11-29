import React from 'react';

import TransactionItem from '@/components/Transaction/TransactionItem';
import { useRouter } from 'next/router';
import {
  getBridgedTransactionDetails,
  getClaimedTransactionDetails,
  getTransactionDetails,
} from '@/utils/helper';
import TransactionComp from '@/components/Transaction/TransactionComp';

const Transaction = () => {
  const router = useRouter();
  const { transaction } = router.query;

  // @vaibhav - Add dynamic data here
  const transactionDetails = getTransactionDetails(
    transaction,
    198212,
    '12th Dec 2023, 13:34:36:00 GMT+5:30',
    892032,
    '0xfa233b067701800b9699b333c69a9a59ced28d26',
    'Ethereum'
  );

  const bridgedTransactionDetails = getBridgedTransactionDetails({
    transaction,
    blockNum: 198212,
    timestamp: '12th Dec 2023, 13:34:36:00 GMT+5:30',
    data: '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dabad81af85554e9ae636395611c58f7ec1aaec50000000000000000000000000000000000000000000000000000000000000018',
    from: '0xfa233b067701800b9699b333c69a9a59ced28d26',
    network: 'Ethereum',
    amount: '8.90 ETH',
    gasLimit: 203.93,
    status: 'Delivered',
  });

  const claimedTransactionDetails = getClaimedTransactionDetails({
    transaction,
    blockNum: 198212,
    timestamp: '12th Dec 2023, 13:34:36:00 GMT+5:30',
    data: '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dabad81af85554e9ae636395611c58f7ec1aaec50000000000000000000000000000000000000000000000000000000000000018',
    from: '0xfa233b067701800b9699b333c69a9a59ced28d26',
    network: 'Polygon',
    amount: '82.90 MATIC',
    gasLimit: 203.93,
    status: 'Delivered',
  });

  const renderTransactionItem = (icon, label, value, isTransaction = false) => (
    <TransactionItem
      icon={icon}
      label={label}
      value={value}
      isTransaction={isTransaction}
    />
  );

  return (
    <div className='w-[90%] mx-auto font-Roboto text-white mt-8'>
      <h1 className='text-xl mb-8'>Transaction Details</h1>

      <TransactionComp
        title={'Basic Info'}
        transactionDetails={transactionDetails}
        renderTransactionItem={renderTransactionItem}
      />

      <div className='pl-6 border-l-2 border-[#161616] flex flex-col gap-8 mt-8 pb-8'>
        <TransactionComp
          title={'Bridged Transaction Info'}
          transactionDetails={bridgedTransactionDetails}
          renderTransactionItem={renderTransactionItem}
        />
        <TransactionComp
          title={'Claimed Transaction Info'}
          transactionDetails={claimedTransactionDetails}
          renderTransactionItem={renderTransactionItem}
        />
      </div>
    </div>
  );
};

export default Transaction;
