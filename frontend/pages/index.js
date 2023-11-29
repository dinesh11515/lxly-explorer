import Image from 'next/image';
import { Inter } from 'next/font/google';
import Search from '@/components/search';
import SearchBar from '@/components/UI/SearchBar';
import Overview from '@/components/Overview/Overview';
import RecentTransactionList from '@/components/RecentTrans/RecentTransactionList';
import {
  bridgeHeaders,
  claimHeaders,
  DUMMY_DATA_DESTINATION,
  DUMMY_DATA_SOURCE,
} from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      {/* <Search /> */}
      <SearchBar />
      <Overview />
      <div className='flex gap-10 w-[90%] mx-auto'>
        <RecentTransactionList
          title={'Latest'}
          data={DUMMY_DATA_SOURCE}
          headers={bridgeHeaders}
        />
        <RecentTransactionList
          title={'Claim'}
          data={DUMMY_DATA_DESTINATION}
          headers={claimHeaders}
        />
      </div>
    </div>
  );
}
