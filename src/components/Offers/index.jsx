import React from 'react';
import Smart_watch from "../../assets/images/smart-watch.png";
import Laptop from "../../assets/images/macbook.png";
import Camera from "../../assets/images/camera.png";
import Headphone from "../../assets/images/headphone.png";
import Phone from "../../assets/images/Phone.png";

const index = () => {
	return (
    <section className='mt-[30px]'>
      <div className="container">
        <div className="wrapper flex justify-between w-full bg-white h-[235px]">
          <div className="wrapper-left min-w-[285px] pt-5 pl-5  border-y border-s">
            <h2 className=" text-[20px] font-semibold">Deals and offers</h2>
            <p className="text-[#8B96A5] text-[16px] font-normal">
              Hygiene equipments
            </p>
            <ul className="flex gap-2 items-center pt-[18px]">
              <li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
                <p>04</p>
                <p>days</p>
              </li>
              <li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
                <p>13</p>
                <p>hours</p>
              </li>
              <li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
                <p>34</p>
                <p>min</p>
              </li>
              <li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
                <p>56</p>
                <p>sec</p>
              </li>
            </ul>
          </div>

          <div className="wrapper-right flex  h-[240px]">
            <div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
              <img src={Smart_watch} />
              <p className="mt-[11px] mb-2">Smart watches</p>
              <a
                href="#"
                className="px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]"
              >
                -25%
              </a>
            </div>
            <div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
              <img src={Laptop} />
              <p className="mt-[11px] mb-2">Smart watches</p>
              <a
                href="#"
                className="px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]"
              >
                -25%
              </a>
            </div>
            <div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
              <img src={Camera} />
              <p className="mt-[11px] mb-2">Smart watches</p>
              <a
                href="#"
                className="px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]"
              >
                -25%
              </a>
            </div>
            <div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
              <img src={Headphone} />
              <p className="mt-[11px] mb-2">Smart watches</p>
              <a
                href="#"
                className="px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]"
              >
                -25%
              </a>
            </div>
            <div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
              <img src={Phone} />
              <p className="mt-[11px] mb-2">Smart watches</p>
              <a
                href="#"
                className="px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]"
              >
                -25%
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;