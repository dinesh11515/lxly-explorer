import { PiArrowsLeftRightFill } from 'react-icons/pi';
import { IoCube, IoPerson } from 'react-icons/io5';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { MdOutlineStickyNote2 } from 'react-icons/md';

const iconStyle = 'text-[#f3f3f3]';

export const getTransactionDetails = (
  transaction,
  blockNum,
  timestamp,
  nonce,
  sender,
  network
) => {
  return [
    [
      {
        icon: (
          <PiArrowsLeftRightFill
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Transaction Hash',
        value: transaction,
        isTransaction: true,
      },
    ],
    [
      {
        icon: (
          <IoCube
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Block Number',
        value: blockNum,
      },
      {
        icon: (
          <AiFillClockCircle
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Created',
        value: timestamp,
      },
    ],
    [
      {
        icon: (
          <MdOutlineStickyNote2
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Nonce',
        value: nonce,
      },
    ],
    [
      {
        icon: (
          <IoPerson
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Sender',
        value: sender,
        isTransaction: true,
      },
      {
        icon: (
          <FaNetworkWired
            className={iconStyle}
            size={15}
          />
        ),
        label: 'Network',
        value: network,
      },
    ],
  ];
};
