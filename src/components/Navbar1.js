import React from 'react'
import { Button,Container,Navbar } from "react-bootstrap"
import StockData from "./StockData.json"
import "./SearchBar.css";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" style={{marginBottom:"15px"}}>
  <Container fluid  style={{margin:"10px"}}>
    <Navbar.Brand href="#" style={{marginRight:"1400px",fontSize:"30px"}}><b>InveSTock</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />



    

    <Navbar.Collapse id="navbarScroll">

      
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Button href='/updateProfile' variant="primary" style={{marginLeft:"15px"}}>
        Profile 
      </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbar1