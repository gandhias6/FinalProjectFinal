import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import "./SearchBar.css";

import StockInfo from "./StockData_2.json";
import BSinfo from "./stocksInfo.json";

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

  const searchItem = StockInfo.find(
    (stock) => stock.company_name.toLowerCase() === company_name.toLowerCase()
  );
  console.log("Stock is ", searchItem);

  const BSsearch = BSinfo.find(
    (stock) => stock.company_name.toLowerCase() === company_name.toLowerCase()
  );
  console.log("Stock are ", BSsearch);

  const innerData = BSsearch.data;
  console.log(innerData);

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
        <h2>{company_name}</h2>
      </div>

      <div className="aboutStock">
        <p>Market Cap : 254622 Cr</p>
        <p>Book Value : 23</p>
        <p>Face Value : 2</p>
        <p>Dividend Yeild : 2 %</p>
        <p>P.E Stock : 6.88 %</p>
        <p>P.E Industry : 86.23 %</p>
        <br />
        <p>Lower Band Price : 543</p>
        <p>Predicted Price : 601</p>
        <p>Higher Band Price : 675</p>
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
        <div className="plot">
          <LineChart width={500} height={300} data={searchItem.data}>
            <Line type="monotone" dataKey="price" stroke="#000" />
            <CartesianGrid stroke="#f1f1f1" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    </Container>
  );
};

export default StockDetails;
