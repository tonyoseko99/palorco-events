import React from "react";
import palorco from "../assets/images/palorco.png";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

const Navigation = () => (
  <Menu mode="horizontal" className="menu" forceSubMenuRender="true" inlineCollapsed="true">
    <Menu.Item key="home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="gallery">
      <Link to="/gallery">Gallery</Link>
    </Menu.Item>
    <Menu.Item key="about">
      <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item key="contact">
      <Link to="/contact">Contact</Link>
    </Menu.Item>
    <Menu.Item key="menu">
      <Link to="/menu">Menu</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
