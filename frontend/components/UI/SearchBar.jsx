import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className='bg-[#161616] flex p-4 w-[90%] mx-auto rounded-sm mt-12'>
      <input
        placeholder='Search by transaction hash or address / eg. 0xD1A36C9a...'
        className='bg-inherit w-full outline-none focus:outline-none text-white placeholder:text-[#737373] text-sm py-2 font-light'
      />

      <BsSearch className='bg-white p-2 text-black text-4xl rounded-sm cursor-pointer hover:bg-[#f0f0f0]' />
    </div>
  );
};

export default SearchBar;
