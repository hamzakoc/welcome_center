import React from "react";
import { Container, Row, Col, Button, } from 'reactstrap';

const FormPage = () => {
  return (
  <>
  <div>
  
    <Container>
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <form>
            <h3 className="title font-weight-bold text-center mb-4" > </h3>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              İsminiz
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              E-mail adresiniz
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Konu
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Mesajınız
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <span className="text-center mt-4">
              <br></br>
              <Button color="success" outline type="submit">
                Gönder
                {/* <IconContext far icon="paper-plane" className="ml-2" /> */}
              </Button>
            </span>
          </form>
        </Col>
      </Row>
      </Container>
    </div>

    </>
  );
};

export default FormPage;