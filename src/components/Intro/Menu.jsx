import React from "react";
import { Menu } from "antd";
import "./style.scss";
const MenuBar = () => {
  return (
    <div>
      <Menu className="menubar w-[250px] h-[360px]">
        <Menu.Item className="item text-[16px] font-normal">Automobiles</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Clothes and wear</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Home interiors</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Computer and tech</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Tools, equipments</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Sports and outdoor</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Animal and pets</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">Machinery tools</Menu.Item>
        <Menu.Item className="item text-[16px] font-normal">More category</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuBar;
