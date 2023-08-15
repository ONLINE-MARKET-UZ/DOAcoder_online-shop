import React from "react";

const FullCard = ({ state: { image, title, price } }) => {
  return (
    <div className="w-[280px] p-5 bg-white">
      <div className="p-3 mb-5">
        <img
          className="w-[150px] h-[150px] bg-transparent m-auto object-contain"
          src={image}
          alt=""
        />
      </div>

      <div className="card_body p-3">
        <strong className="mb-4 text-[16px] font-semibold leading-[22px] text-[#1C1C1C]">
          ${price}
        </strong>
        <p className="text-[16px] font-normal text-[#8B96A5]">
          {title.slice(0, 20)}...
        </p>
      </div>
    </div>
  );
};

export default FullCard;
