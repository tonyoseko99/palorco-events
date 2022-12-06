import react from "react";
import { Col, Row } from "antd";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <>
      <Row className="footer">
        <Col span={24}>
          <h1>Contact</h1>
          <p>Phone: 123-456-7890</p>
          <p>
            <em>palorco-chefs@events.com</em>
          </p>
          
          <br />
          <h2>Follow Palorco Chefs & Events</h2>
          <div className="social-media">
            <a href="https://www.facebook.com/">
            <FacebookOutlined />
            </a>
            <a href="https://www.instagram.com/">
            <InstagramOutlined />
            </a>
          </div>
            <br />
          <p id="copyright">Palorco &copy; 2022</p>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
