import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SyncIcon from '@mui/icons-material/Sync';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Policy = () => {
  return (
    <section className="border-t border-gray-500 mt-10 ">
      <div className="container">
        <ul className="pt-6 pb-6 flex justify-between flex-wrap">
          <li className="delivery flex gap-2 items-center">
            <LocalShippingIcon sx={{ fontSize: 50 }} />
            <div className="delivery-text flex flex-col">
              <strong>FREE DELIVERY</strong>
              <span className="text-xs">From $59.89</span>
            </div>
          </li>
          <li className="support flex gap-2 items-center">
            <HeadsetMicIcon sx={{ fontSize: 50 }} />
            <div className="support-text flex flex-col">
              <strong>SUPPORT 24/7</strong>
              <span className="text-xs">Online 24 hours</span>
            </div>
          </li>
          <li className="return flex gap-2 items-center">
            <SyncIcon sx={{ fontSize: 50 }} />
            <div className="return-text flex flex-col">
              <strong>30 DAYS RETURN</strong>
              <span className="text-xs">Simply return it within 30 days</span>
            </div>
          </li>
          <li className="return flex gap-2 items-center">
            <CreditCardIcon sx={{ fontSize: 50 }} />
            <div className="return-text flex flex-col">
              <strong>30 DAYS RETURN</strong>
              <span className="text-xs">Simply return it within 30 days</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
