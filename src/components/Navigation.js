import React from "react";
import palorco from "../assets/images/palorco.png";
import { Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Login from "./Login";

const Navigation = () => (
  <Menu mode="horizontal" className="menu">
    <Menu.Item id="home-item">
      <img src={palorco} alt="palorco" id="image-logo" />
    </Menu.Item>
    <Menu.Item>
        {/* link to home */}
        <Link to="/">
            Home
        </Link>
    </Menu.Item>
    <Menu.Item>
        {/* link to gallery */}
        <Link to="/gallery">
            Gallery
        </Link>
    </Menu.Item>
    <Menu.Item>
        {/* link to signup */}
        <Link to="/signup">
            Signup
        </Link>
    </Menu.Item>
    <Menu.SubMenu
      key="SubMenu"
      title="Palorco Services"
      icon={<DownOutlined />}
    >
      <Menu.Item key="four">Catering</Menu.Item>
      <Menu.Item key="five">Events Hosting</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>
      {/* link to login */}
        <Link to="/login">
            <Button type="primary">Login</Button>
        </Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
