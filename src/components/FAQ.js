import React from 'react'
import { Container } from 'react-bootstrap'
import "./SearchBar.css";

const FAQ = () => {
  return (
    <>
    <Container className=" align-items-center justify-content-center" style={{width:"1500px",height:"675px",borderRadius:"5px", marginRight:"30px",float:"right",backgroundColor:"#f1f1f1"}}>
      
    <div className='faq'>
          <h2>Why stock market investment?   </h2>
      <p>While investment in Fixed Deposits with 5-6% per year returns is cut down by inflation.
          On the other hand, returns in stock market provide up to 15% CAGR returns
      </p>

      <hr />

      <h2>Why long-term investment?</h2>
        <p>
            <ul>
                <li>
                    Safer Investment - Long view and time-frame on a position and don’t need to closely 
            monitor them up to the minute. 
                </li>

                <li>
                    Focus on Core Fundamentals of the balance sheet-  
                    If a stock did not perform well in the short term, there is no need to book losses right away.
                    If the stock is good, the trader could hold on for the long term and sell it when the stock
                    rises in value.  
                </li>

                <li>
                    The idea is to invest your money and forget about it for atleast 5-10 years,
                    and reap benefits in the future - can act as a better alternative to fixed deposits made for
                    savings for old-age, children's education, property investment, car or home purchase in future.
                
                </li>
            </ul>
          </p>
      <hr />

        <h2> What is long-term stock investment?</h2>
        <p>Holding different assets like mutual funds, securities, shares and stocks for more than a year, 
            preferably for more than 5-10 years</p>
    </div>
      
    </Container>
    </>
  )
}

export default FAQ



{/* <div class="container">
    <h2>Why stock market investment?   </h2>
<p>While investment in Fixed Deposits with 5-6% per year returns is cut down by inflation.
    On the other hand, returns in stock market provide up to 15% CAGR returns
</p>

<hr>
<h2>Why long-term investment?</h2>
<p>
    <ul>
        <li>
            Safer Investment - Long view and time-frame on a position and don’t need to closely 
    monitor them up to the minute. 
        </li>

        <li>
            Focus on Core Fundamentals of the balance sheet-  
            If a stock did not perform well in the short term, there is no need to book losses right away.
            If the stock is good, the trader could hold on for the long term and sell it when the stock
            rises in value.  
        </li>

        <li>
            The idea is to invest your money and forget about it for atleast 5-10 years,
            and reap benefits in the future - can act as a better alternative to fixed deposits made for
            savings for old-age, children's education, property investment, car or home purchase in future.
        
        </li>
    </ul>
    

<hr>
<h2> What is long-term stock investment?</h2>
<p>Holding different assets like mutual funds, securities, shares and stocks for more than a year, 
    preferably for more than 5-10 years</p>

</div> */}