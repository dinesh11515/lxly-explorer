import { BsCheck } from 'react-icons/bs';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { FaEthereum } from 'react-icons/fa';

const StatusBadge = ({ status }) => {
  const isDelivered = status === 'Goerli';
  const badgeStyle = isDelivered
    ? 'bg-white text-black'
    : 'bg-[#A77DFF] text-black';
  const Icon = isDelivered ? FaEthereum : PiArrowsClockwiseBold;

  return (
    <p
      className={`w-[90px] text-center py-1 rounded-full text-xs font-normal flex items-center justify-center ${badgeStyle}`}>
      <Icon
        className={isDelivered ? '' : 'mr-1'}
        size={isDelivered ? 16 : 14}
      />
      {status}
    </p>
  );
};

export default StatusBadge;
