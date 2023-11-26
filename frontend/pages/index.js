import Image from 'next/image';
import { Inter } from 'next/font/google';
import Search from '@/components/search';
import SearchBar from '@/components/UI/SearchBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      {/* <Search /> */}
      <SearchBar />
    </div>
  );
}
