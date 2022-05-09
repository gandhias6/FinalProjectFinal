import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from "../components/Wipro-logo.png";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import "./SearchBar.css";

import BSinfo from "./data.json";

// const renderDate = ({ x, y, payload }) => {
//   return (
//     <text x={x} y={y} fill="#666" textAnchor="middle" dy={6}>
//       {new Date(payload.value).toLocaleDateString("en-IN", {
//         day: "numeric",
//         month: "short",
//       })}
//     </text>
//   );
// };

const StockDetails = () => {
    const { company_name } = useParams();

    const searchItem = BSinfo.find(
        (stock) =>
            stock.company_name.toLowerCase() === company_name.toLowerCase()
    );
    console.log("Stock are ", searchItem);

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

                <table style={{ width: "90%", "margin-inline": "auto" }}>
                    <tbody>
                        <tr>
                            <th>{searchItem.company_name}</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item.Date}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>EPS</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["EPS"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Operating Profits</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Operating_Profits"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Sales</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Sales"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Expenses</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Expenses"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Interest</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Interest"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Other Income</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Other_Income"]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Net Profit</th>
                            {searchItem.data.map((item, index) => (
                                <td key={index}>{item["Net_Profit"]}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="chart">
                <p>Chart</p>
                <div className="plot">
                    <LineChart width={500} height={300} data={searchItem.data}>
                        <CartesianGrid stroke="#f1f1f1" />
                        <XAxis dataKey="Date" />
                        <YAxis type="number" domain={[0, "dataMax + 1000"]} />
                        <Line type="monotone" dataKey="Price" stroke="#000" />
                    </LineChart>
                </div>
            </div>
        </Container>
    );
};

export default StockDetails;
