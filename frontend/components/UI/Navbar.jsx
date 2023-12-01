import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

const Navbar = () => {
  const { open, close } = useWeb3Modal();

  const connectWallet = async () => {
    try {
      await open();
    } catch (e) {
      console.log(e, "ConnectWallet");
    }
  };

  return (
    <nav className="text-white font-Roboto flex justify-between w-screen px-20 mx-auto py-3 border-b-[1px] border-[#161616] items-center">
      <p className="">LXLY Scan</p>
      <button
        onClick={connectWallet}
        className="py-2 w-[150px] rounded-sm bg-[#161616] font-medium hover:bg-[#1c1c1c]"
      >
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
