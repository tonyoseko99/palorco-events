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
          <br /> <br />
          <div className="p-divider">
            <p className="p-3">
              When you have a memorable experience you share it with others.
              Some of the most memorable moments in life tend to be experiences
              surrounded by food, beverages, activities, people, and causes you
              love. Nothing can substitute experience.
            </p>
            <p className="p-4">
              Palorco provides you with the best experience you can ever have.
              We are your one stop shop for all your event needs. We are here to
              make your event a memorable one.
            </p>
          </div>
        </Col>
      </Row>
    </Row>
  </>
);
export default Home;
