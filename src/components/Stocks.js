import React from "react";
import { Container } from "react-bootstrap";
import StockData from "./StockData.json";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const Stocks = () => {
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
            <div className="stocks">
                {StockData.map((stock) => {
                    return (
                        <Link
                            to={`/stocks/${stock.company_name}`}
                            key={stock.company_name}
                        >
                            <h2>{stock.company_name}</h2>
                        </Link>
                    );
                })}
            </div>
        </Container>
    );
};

export default Stocks;
