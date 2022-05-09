import React from "react";
import { Container } from "react-bootstrap";
import "./SearchBar.css";

const About = () => {
  return (
    <Container
      className=" align-items-center justify-content-center"
      style={{
        width: "1500px",
        height: "675px",
        borderRadius: "5px",
        marginRight: "30px",
        float: "right",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div className="about">
        <h1>About Us</h1>
        <p>
          Investock is a free to use tool and screener to analyse stock prices
          and financial data it uses machine learning algorithms to predict
          future prices
        </p>
      </div>
    </Container>
  );
};

export default About;
