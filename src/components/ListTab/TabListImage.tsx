import React from "react";

const image23 = require("../../assets/images/Rectangle 23.png");
const image27 = require("../../assets/images/Rectangle 27.png");
const image25 = require("../../assets/images/Rectangle 25.png");
const image24 = require("../../assets/images/Rectangle 24.png");
const image21 = require("../../assets/images/Rectangle 21.png");
const image28 = require("../../assets/images/Rectangle 28.png");
const image26 = require("../../assets/images/Rectangle 26.png");
const image29 = require("../../assets/images/Rectangle 29.png");

const TabListImage = () => {
  return (
    <div className="lg:w-[calc(100%-300px)] mx-auto">
      <div className="flex flex-col lg:w-full">
        <h1 className="text-[#121212] text-[30px] font-bold mt-[60px] mb-[32px] mx-auto">
          Packer pen Gallery
        </h1>
        <div className="">
          <div className="flex flex-wrap justify-between gap-2 lg:w-full lg:flex lg:flex-row lg:items-center">
            <div className="flex flex-col gap-2 w-[48.5%] lg:basis-3/12 lg:gap-3">
              <img
                src={image23}
                alt="images23"
                className="object-cover lg:h-[185px] lg:rounded-[12px]"
              />
              <img
                src={image27}
                alt="image27"
                className="object-cover lg:h-[308px] lg:rounded-[12px]"
              />
            </div>
            <div className="flex flex-wrap w-[48.5%] lg:flex-col lg:basis-[47%] lg:gap-3">
              <img
                src={image25}
                alt="image25"
                className="object-cover lg:hidden"
              />
              <img
                src={image29}
                alt="image29"
                className="object-cover hidden lg:block lg:rounded-[12px]"
              />
              <img
                src={image24}
                alt="image24"
                className="hidden lg:block object-cover lg:h-[284px] lg:rounded-[12px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={image24}
                alt="image24"
                className="lg:hidden object-cover lg:h-[295px]"
              />
            </div>
            <div className="flex flex-col gap-2 lg:basis-3/12 lg:gap-3 lg:ml-[-20px]">
              <img
                src={image21}
                alt="image21"
                className="object-cover lg:rounded-[12px] lg:h-[119px]"
              />
              <div className="flex gap-2 lg:flex-col">
                <img
                  src={image28}
                  alt="image28"
                  className="w-[48.5%] lg:w-full object-cover lg:rounded-[12px] lg:h-[230px]"
                />
                <img
                  src={image26}
                  alt="images26"
                  className="w-[48.5%] lg:w-full object-cover lg:rounded-[12px] lg:h-[138px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabListImage;
