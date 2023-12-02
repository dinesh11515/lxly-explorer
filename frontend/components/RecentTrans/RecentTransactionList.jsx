'use client';

import React from 'react';
import TransactionListHeader from './TransactionListHeader';
import RecentTransaction from './RecentTransaction';

const RecentTransactionList = ({ headers, data, title, isAddressPage }) => {
  return (
    <div className='mt-20 font-Roboto w-[90%] mx-auto text-white pb-10'>
      <p className='text-sm font-light pb-2 border-b-[1px]  border-[#161616]'>
        {title} Transactions
      </p>

      <div className='w-full'>
        <TransactionListHeader headers={headers} />

        {data.map((transaction, index) => (
          <RecentTransaction
            isAddressPage={isAddressPage}
            transaction={transaction}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactionList;
