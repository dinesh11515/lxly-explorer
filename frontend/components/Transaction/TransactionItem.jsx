import { useRouter } from 'next/router';
import React from 'react';
import { IoCopy } from 'react-icons/io5';

const TransactionItem = ({ icon, label, value, isTransaction = false }) => {
  const router = useRouter();

  return (
    <div
      className={`flex w-full  items-center ${
        isTransaction ? 'bg-[#1C1C1C]' : 'bg-[#161616] '
      } p-4 rounded-sm font-Roboto mb-1`}>
      <div className='flex items-center gap-2 w-[220px]'>
        {icon}
        <p className=' text-sm text-[#f0f0f0]'>{label}</p>
      </div>
      <div className='flex gap-2 items-center '>
        <p
          onClick={() => {
            if (isTransaction) {
              if (value.length === 42) {
                router.push(`/address/${value}`);
              } else {
                router.push(`/tx/${value}`);
              }
            }
          }}
          className={` break-words max-w-[1000px] text-sm text-[#b9b9b9]  font-light tracking-wide  ${
            isTransaction && 'hover:underline hover:text-white cursor-pointer'
          } `}>
          {value}
        </p>

        {isTransaction ? (
          <IoCopy
            className='text-[#b9b9b9] cursor-pointer hover:text-white'
            size={15}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TransactionItem;
