import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import StatusBadge from './StatusBadge';

const RecentTransaction = ({ transaction }) => {
  const { blockNumber, transactionHash, blockTimestamp, network, status } =
    transaction;

  const router = useRouter();

  return (
    <ul className='flex mb-1 rounded-sm items-center w-full py-4 font-light text-slate-200 text-sm border-b-[1px] border-[#181818] bg-[#161616] hover:bg-[#202020] cursor-pointer'>
      <li className='pl-4 flex-[0.25]'>
        <StatusBadge status={status} />
      </li>
      <li
        onClick={() => {
          router.push(`/tx/${transactionHash}`);
        }}
        className='pl-4 flex-[0.5] hover:underline'>
        {transactionHash.slice(0, 13) + '.....' + transactionHash.slice(-13)}
      </li>
      <li className='pl-4 flex-[0.25] text-[#737373]'>{blockNumber}</li>
    </ul>
  );
};

export default RecentTransaction;
