import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./SearchBar.css";
import StockData from "./StockData.json"
import logo from "../components/Wipro-logo.png"


export default function Dashboard() {

  return (
    <>
    <Container className=" align-items-center justify-content-center" style={{float:"right",marginLeft:"0px"}}>
      
    
      <div className="first">

        <div className="nameLogo">
          <img src={logo} alt="" />
          <p> Wipro</p>
        </div>


        <div className="aboutStock">
          <Row>
              <Col><p>Market Cap: 3,00,000 cr</p></Col>
              <Col><p> LTP: 600</p></Col>  
          </Row>
          <Row>
              <Col><p>52 Week-high : 700</p></Col>
              <Col><p>52 Week-low : 450</p></Col>  
          </Row>
          <Row>
              <Col><p>Stock P/E : 25</p></Col>
              <Col><p>Industry P/E : 34</p></Col>    
          </Row>
        </div>

        <div className="balanceSheet">
          <h2>Balance Sheet</h2>
          <table>
            <tr>
              <th>Ratios</th>
              <th>Mar 2014</th>
              <th>Mar 2015</th>
              <th>Mar 2016</th>
              <th>Mar 2017</th>
              <th>Mar 2018</th>
              <th>Mar 2019</th>
              <th>Mar 2020</th>
            </tr>
            <tr>
              <td>Expenses</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
            <tr>
              <td>Sales</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
            <tr>
              <td>O.P.M</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
            <tr>
              <td>O.P.M</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
            <tr>
              <td>O.P.M</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
            <tr>
              <td>O.P.M</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
              <td>Mar 2014</td>
            </tr>
          </table>
        </div>
        
        <div className="chart">
          <p>Chart</p>
        </div>

      </div>
    
    

    </Container>
    </>
  )
}


