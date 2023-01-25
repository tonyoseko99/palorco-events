import React from "react";
import { Col, Row } from "antd";
const Home = () => (
  <>
    <Row>
      <Col span={24} className="background-column">
        <h1 id="lets-get">
          LET'S GET
          <br />
          <span id="cooking-header">
            <span id="cooking-h1">C</span>ooking
          </span>
        </h1>
      </Col>

      <Row justify="center"className="paragraph-section" >
        <Col span={16}>
          <p className="p-1">People buy experiences and not products.</p>
          <p className="p-2">
            We are here to provide you with the best experience. Your experience
            is our priority. Your event deserves the best.
          </p>
          <br />
        </Col>
        <Col span={16} justify="center">
          <p className="p-3" style={{textAlign: "center", alignItems: "center"}}>
            We are a full-service catering company that specializes in
            providing delicious food and excellent service for all types of
            events. We are committed to providing you with the best experience
            possible. We are here to make your event a success.
          </p>

        </Col>
      </Row>
    </Row>
  </>
);
export default Home;
