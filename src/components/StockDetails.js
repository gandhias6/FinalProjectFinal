import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from "../components/Wipro-logo.png";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import "./SearchBar.css";

import StockInfo from "./StockData_2.json";

const renderDate = ({ x, y, payload }) => {
    return (
        <text x={x} y={y} fill="#666" textAnchor="middle" dy={6}>
            {new Date(payload.value).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
            })}
        </text>
    );
};

const StockDetails = () => {
    const { company_name } = useParams();

    const searchItem = StockInfo.find(
        (stock) =>
            stock.company_name.toLowerCase() === company_name.toLowerCase()
    );
    console.log("Stock is ", searchItem);

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
            <div className="nameLogo">
                <img src={logo} alt="" />
                <h2>{company_name}</h2>
            </div>

            <div className="aboutStock">
                <Row>
                    <Col>
                        <p>Market Cap: 3,00,000 cr</p>
                    </Col>
                    <Col>
                        <p> LTP: 600</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>52 Week-high : 700</p>
                    </Col>
                    <Col>
                        <p>52 Week-low : 450</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Stock P/E : 25</p>
                    </Col>
                    <Col>
                        <p>Industry P/E : 34</p>
                    </Col>
                </Row>
            </div>

            <div className="balanceSheet">
                <h2>Balance Sheet</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Mar 2010</th>
                            <th>Mar 2011</th>
                            <th>Mar 2012</th>
                            <th>Mar 2013</th>
                            <th>Mar 2014</th>
                            <th>Mar 2015</th>
                            <th>Mar 2016</th>
                            <th>Mar 2017</th>
                            <th>Mar 2018</th>
                            <th>Mar 2019</th>
                            <th>Mar 2020</th>
                            <th>Mar 2021</th>
                        </tr>
                        <tr>
                            <th>EPS</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <th>Operating Profit</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <th>Sales</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <th>Expenses</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <th>Intrest</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <th>Other Income</th>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                            <td>34</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="chart">
                <p>Chart</p>

                <LineChart width={500} height={300} data={searchItem.data}>
                    <Line type="monotone" dataKey="price" stroke="#000" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" tick={renderDate} />
                    <YAxis />
                </LineChart>
            </div>
        </Container>
    );
};

export default StockDetails;
