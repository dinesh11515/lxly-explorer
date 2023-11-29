import React from 'react';

import TransactionItem from '@/components/Transaction/TransactionItem';
import { useRouter } from 'next/router';
import { getTransactionDetails } from '@/utils/helper';

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
      <h1 className='text-xl'>Transaction Details</h1>

      <div className='mt-8'>
        <p className='text-[#737373] font-light mb-1'>Basic Info</p>

        <div>
          {transactionDetails.map((group, index) => (
            <div
              key={index}
              className={`${
                group.length > 1 ? 'flex items-center gap-1 w-full' : ''
              }`}>
              {group.map((item, subIndex) =>
                renderTransactionItem(
                  item.icon,
                  item.label,
                  item.value,
                  item.isTransaction
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
