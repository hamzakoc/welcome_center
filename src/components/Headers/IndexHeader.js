
import React from "react";

// reactstrap componentsimport {
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
          <Container>
            <div className="section">
     
            <br /><br /><br /><br />  <br />
          <Row>
            <Col lg="6" md="15">

            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Kanada Karşılama Merkezi</h2>
                <h5 className="description">Northern Lights Relief Foundation gönüllü grubu,
               Kanada'ya yeni gelenlerin bu yeni ülkede ilk sorunlarını çözmeleri için yeni 
               bir fırsat yaratmak üzere bir araya geldi. Northern Lights Relief Foundation, 
               insani yardım ve mülteci çabalarında işbirliği yapmak için gönüllü ekiplerini 
               bir araya getiren kar amacı gütmeyen bir organizasyondur. Bu ekipler ailelerin
                ihtiyaçlarına maddi, duygusal ve fiziksel olarak yardım etmeyi ve yeni gelenlere 
                hem entegrasyon hem de yerleşim anlamında yerleşmelerine yardımcı olmak için bir
                 dizi destek sunmaktadır.
                </h5>
                <br />
                
              </Col>
            </Row>
            
            </Col>
            <Col lg="2" md="1">
              <div className="card-avatar">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/logo.jpg")}
                      />
                    </a>
                </div>
              
            </Col>
          </Row>
      </div>{" "}
          </Container>
  </>
  );
}

export default IndexHeader;