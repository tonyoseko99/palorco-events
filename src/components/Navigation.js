import React from "react";
import palorco from "../assets/images/palorco.png";
import { Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Login from "./Login";

const Navigation = () => (
  <Menu mode="horizontal" className="menu">
    <Menu.Item id="home-item">
      <img src={palorco} alt="palorco" id="image-logo" />
    </Menu.Item>
    <Menu.Item>Home</Menu.Item>
    <Menu.Item>Gallery</Menu.Item>
    <Menu.Item>About Us</Menu.Item>
    <Menu.SubMenu
      key="SubMenu"
      title="Palorco Services"
      icon={<DownOutlined />}
    >
      <Menu.Item key="four">Catering</Menu.Item>
      <Menu.Item key="five">Events Hosting</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>
      <Button type="primary" id="login-btn">
        
      </Button>
    </Menu.Item>
  </Menu>
);

export default Navigation;
