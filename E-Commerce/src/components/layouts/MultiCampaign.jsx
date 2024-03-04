import React from 'react';

const MultiCampaign = () => {
  return (
    <section className="multicampaign mb-12">
      <div className="container ">
        <div className="wrapper1 flex mb-12 gap-12 flex-wrap">
          <div className=" item-1  flex-1 ">
            <h3 className="text-3xl font-bold">
              Fashion Month <br />
              Ready in Capital <br />
              Shop
            </h3>

            <p className="mt-10 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <br />
            <a href="#" className="pl-8 pr-8 pt-2 pb-2 bg-blue-700 ">
              View All
            </a>
          </div>
          <div className="item-2">
            <h3 className="text-3xl font-bold">
              Fashion Month
              <br />
              Ready in Capital
              <br />
              Shop
            </h3>
            <p className="mt-10 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>

            <a href="#" className="pl-8 pr-8 pt-2 pb-2 bg-blue-700 ">
              View All
            </a>
          </div>
        </div>
        <div className="wrapper2 flex gap-12 flex-wrap">
          <div className=" item-3 flex-[5]">
            <h3 className="text-3xl font-bold">
              Fashion Month <br /> Ready in Capital <br /> Shop
            </h3>
            <p className="mt-10 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>

            <a href="#" className="pl-8 pr-8 pt-2 pb-2 bg-blue-700 ">
              View All
            </a>
          </div>
          <div className=" item-4 flex-[3]">
            <h3 className="text-3xl font-bold">
              Fashion Month <br />
              Ready in Capital <br /> Shop
            </h3>
            <p className="mt-10 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>

            <a href="#" className="pl-8 pr-8 pt-2 pb-2 bg-blue-700 ">
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiCampaign;
