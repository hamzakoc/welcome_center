/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section"> <hr></hr>
        <Container className="text-center">
          
          <Row className="justify-content-center sharing-area text-center">
         
              <h3>Bizi desteklediginiz icin tesekkur ederiz!</h3>
            
            <Col className="text-center"  >
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
             
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="instagram-bg"
                href="#"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-instagram" /> instagram
              </Button>
             
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
