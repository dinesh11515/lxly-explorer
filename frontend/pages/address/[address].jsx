import { useRouter } from 'next/router';
import React from 'react';
import UserTransactionOverview from '@/components/Overview/UserTransactionOverview';
import RecentTransactionList from '@/components/RecentTrans/RecentTransactionList';
import {
  bridgeHeaders,
  claimHeaders,
  DUMMY_DATA_DESTINATION,
  DUMMY_DATA_SOURCE,
} from '@/constants';

const Address = () => {
  const router = useRouter();
  const { address } = router.query;

  return (
    <section className=' mx-auto font-Roboto '>
      <div className='py-10 w-[90%] mx-auto'>
        <p className='text-xs text-[#A0A0A0]'>Address</p>
        <p className='text-white text-lg'>{address}</p>
      </div>

      <UserTransactionOverview />

      <div className='flex flex-col '>
        {DUMMY_DATA_SOURCE.length > 0 && (
          <RecentTransactionList
            title={'Bridged'}
            data={DUMMY_DATA_SOURCE}
            headers={bridgeHeaders}
          />
        )}

        <div className='-mt-20'>
          {DUMMY_DATA_DESTINATION.length > 0 && (
            <RecentTransactionList
              title={'Claimed'}
              data={DUMMY_DATA_DESTINATION}
              headers={claimHeaders}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Address;
