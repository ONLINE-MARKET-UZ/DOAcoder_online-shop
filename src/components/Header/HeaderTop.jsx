import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.svg"
import message from "../../assets/images/message.svg"
import orders from "../../assets/images/heart.svg"
import cart from "../../assets/images/karzina.svg"


import { Input, Select, Button } from "antd";

const HeaderTop = () => {
  return (
    <div className="h-[86px] flex items-center justify-between">
      <a href="">
        <img src={logo} alt="#" />
      </a>
      <div className="flex border border-blue-500 rounded-md">
        <Input
          className="w-[406px] text-[16px] rounded-l-md rounded-none outline-none border-none"
          placeholder="Search"
        />
        <select className="outline-none text-[16px] border border-l-blue-500">
          <option value="All category" selected disabled>
            All category
          </option>
          <option value="Automobiles">Automobiles</option>
          <option value="Clothes and wear">Clothes and wear</option>
          <option value="Home interiors">Home interiors</option>
        </select>
        <Button
          default
          className="text-[16px] h-[40px] bg-blue-500 text-white border-none rounded-none rounded-r-md"
        >
          Search
        </Button>
      </div>

      <ul className="flex items-center gap-x-[23px] text-[#8B96A5] text-[12px]">
        <li className="flex flex-col justify-between h-[41px]">
          <img className="self-center" src={user} alt="user" />
          Profile
        </li>
        <li className="flex flex-col justify-between h-[41px]">
          <img className="self-center" src={message} alt="message" />
          Message
        </li>
        <li className="flex flex-col justify-between h-[41px]">
          <img className="self-center" src={orders} alt="orders" />
          Orders
        </li>
        <li className="flex flex-col justify-between h-[41px]">
          <img className="self-center" src={cart} alt="cart" />
          My cart
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
