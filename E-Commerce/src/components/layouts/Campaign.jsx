import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Campaign = () => {
  return (
    <section className="campaign">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-3">
          <h3 className="text-2xl"> New Season Sale</h3>
          <strong className="text-6xl">%40 OFF</strong>
          <span className="border-2 border-white border-solid w-12"></span>
          <button className="p-4 text-2xl bg-white text-black mt-5 mb-5 ">
            Show Now
            <ArrowRightAltIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
