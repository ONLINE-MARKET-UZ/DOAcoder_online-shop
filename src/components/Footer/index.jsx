import email from "../../assets/images/email.svg";
import { Button } from "antd";
import "./style.scss";

import logo from "../../assets/images/logo.svg";
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import flag from "../../assets/images/icon.png";
import "./style.scss";

const index = () => {
  return (
    <footer className="mt-[80px]">
      <div className="container">
        <div className="wrapper flex flex-col ">
          <div className="top_side mb-[39px] ">
            <h2 className="text-center text-[20px] font-semibold leading-[28px] tracking-[-0.2px] text-[#1C1C1C]">
              Subscribe on our newsletter
            </h2>
            <p className="text-center text-[16px] font-normal leading-[24px] tracking-[-0.2px] text-[#606060] mb-[24px]">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <form className=" flex items-center justify-center gap-[10px]">
              <div className=" relative">
                <img
                  className=" absolute top-[13px] left-3"
                  src={email}
                  alt="email"
                />
                <input
                  className="w-[274px] py-[11px] pl-[40px] border-2 rounded-lg"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <Button
                className="px-[20px] bg-blue-500 text-white h-[48px]"
                default
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className="flex justify-between py-[50px] bg-white px-5">
            <div>
              <img className="mb-[5px]" src={logo} alt="logo" />
              <p className="text-[16px] w-[276px] mb-5">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <div className="flex gap-x-2">
                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <i className="bx bxl-facebook text-white text-[26px]"></i>
                </span>
                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <i className="bx bxl-twitter text-white text-[26px]"></i>
                </span>
                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <i className="bx bxl-linkedin text-white text-[26px]"></i>
                </span>
                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <i className="bx bxl-instagram text-white text-[26px]"></i>
                </span>
                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <i className="bx bxl-youtube text-white text-[26px]"></i>
                </span>
              </div>
            </div>

            <ul className="text-[#8B96A5] text-[16px]">
              <li className="font-medium text-black mb-[10px]">About</li>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <ul className="text-[#8B96A5] text-[16px]">
              <li className="font-medium text-black mb-[10px]">Partnership</li>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <ul className="text-[#8B96A5] text-[16px]">
              <li className="font-medium text-black mb-[10px]">Information</li>
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
            <ul className="text-[#8B96A5] text-[16px]">
              <li className="font-medium text-black mb-[10px]">For users</li>
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
            <ul>
              <li className="font-medium text-black mb-[10px]">Get app</li>
              <li className="mb-[8px]">
                <img src={app} alt="pic" />
              </li>
              <li>
                <img src={google} alt="pic" />
              </li>
            </ul>
          </div>
          <div></div>
          <div className="bg-[#EFF2F4] py-[23px] p-5 flex items-center justify-between">
            <p>© 2023 Ecommerce. </p>
            <div className="flex items-center gap-3">
              <img src={flag} alt="" />
              <select className="outline-none font-medium text-[16px] bg-transparent ">
                <option value="Ship to" disabled selected>
                  Ship to
                </option>
                <option>Ship to</option>
                <option>Ship to</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
