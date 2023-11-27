import React, { useMemo } from 'react';
import StatusBadge from './StatusBadge';

const RecentTransaction = ({ transaction }) => {
  const { status, nonce, sourceTxHash, destinationTxHash, from, created } =
    transaction;

  const shortSourceTxHash = useMemo(
    () => sourceTxHash.slice(0, 24) + '....',
    [sourceTxHash]
  );
  const shortDestinationTxHash = useMemo(
    () => destinationTxHash.slice(0, 24) + '....',
    [destinationTxHash]
  );
  const shortFrom = useMemo(() => from.slice(0, 14) + '....', [from]);

  return (
    <ul className='flex mb-1 rounded-sm items-center w-full py-4 font-light text-slate-200 text-sm border-b-[1px] border-[#181818] bg-[#161616] hover:bg-[#202020] cursor-pointer'>
      <li className='pl-4 flex-[0.1]'>
        <StatusBadge status={status} />
      </li>
      <li className='pl-4 flex-[0.1] text-[#737373]'>{nonce}</li>
      <li className='pl-4 flex-[0.25] hover:underline'>{shortSourceTxHash}</li>
      <li className='pl-4 flex-[0.25] hover:underline'>
        {shortDestinationTxHash}
      </li>
      <li className='pl-4 flex-[0.15] hover:underline'>{shortFrom}</li>
      <li className='pl-4 flex-[0.15] text-[#737373]'>{created}</li>
    </ul>
  );
};

export default RecentTransaction;
