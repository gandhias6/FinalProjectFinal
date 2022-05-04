import React from 'react'
import { Container , Button} from "react-bootstrap"
import { Link } from 'react-router-dom';



const SideMenu = () => {
 
  return (
    
      <Container style={{height:"84vh",width:"300px",backgroundColor:"#f1f1f1",borderRadius:"5px",float:"left",marginLeft:"25px"}}>
            <Link to='/algoTrading'>
            <Button  variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}}> Algo/System Trading</Button>
            </Link>

            <Link to='/stocks'>
            <Button  variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}} >Stocks</Button>
            </Link>

            <Link to='/team'>
            <Button  variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}} >Team</Button>
            </Link>

            <Link to='/contactUs'>
            <Button variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}} >Contact Us</Button>
            </Link>

            <Link to='/'>
            <Button variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}} >FAQ</Button>
            </Link>
            
            <Link to='/about'>
              <Button variant="primary" style={{width:"260px",marginLeft:"6px",marginTop:"20px"}} >About</Button>
            </Link>
      </Container>
    
    
  )
}

export default SideMenu