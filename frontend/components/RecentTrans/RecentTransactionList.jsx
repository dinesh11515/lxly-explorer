import React from 'react';
import TransactionListHeader from './TransactionListHeader';
import { DUMMY_DATA } from '@/constants';
import RecentTransaction from './RecentTransaction';

const headers = [
  { title: 'Status', flexWidth: '0.1' },
  { title: 'Nonce', flexWidth: '0.1' },
  { title: 'Source Tx HashNonce', flexWidth: '0.25' },
  { title: 'Destination Tx Hash', flexWidth: '0.25' },
  { title: 'From', flexWidth: '0.15' },
  { title: 'Created', flexWidth: '0.15' },
];

const RecentTransactionList = () => {
  return (
    <div className='mt-20 font-Roboto w-[90%] mx-auto text-white pb-10'>
      <p className='text-sm font-light pb-2 border-b-[1px] border-[#161616]'>
        Latest Transactions
      </p>

      <div className='w-full'>
        <TransactionListHeader headers={headers} />

        {DUMMY_DATA.map((transaction, index) => (
          <RecentTransaction
            transaction={transaction}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactionList;
