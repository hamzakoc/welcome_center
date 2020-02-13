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
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/BelgelerPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import IndexNavbar from "components/Navbars/IndexNavbar";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>

        <IndexNavbar />
          
          <div className="owner">
          <br /><br />
            <div className="name">
              <h4 className="title"> Belgeler <br />
              </h4>
              <h6 className="description">İçerik üretiliyor.Anlayışınız için teşekkür ederiz...</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-5 mr-auto " md="8" >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus mauris eu nisl commodo condimentum. Maecenas elit mi, mattis in pretium eu, lacinia vel lacus. Sed rhoncus elit sollicitudin, tempor tellus eget, imperdiet ligula. Aliquam tristique et nisi sed maximus. Suspendisse bibendum mauris quis metus mattis iaculis. Phasellus risus leo, sodales vel nunc eu, dapibus tempus arcu. Sed ullamcorper elementum libero lacinia accumsan. Curabitur pharetra ex odio, non fringilla nibh laoreet at. Mauris cursus dolor ante, eget cursus nunc ornare convallis. Mauris lectus justo, ultrices id odio vitae, pulvinar malesuada massa. Aliquam convallis turpis ut justo laoreet auctor.

Etiam posuere lacus enim, id fermentum massa pretium sit amet. Curabitur non tellus elementum, laoreet purus sit amet, pulvinar lacus. Donec eget blandit ipsum. Maecenas maximus vulputate consequat. Suspendisse facilisis dui ut tristique elementum. Nulla pulvinar laoreet tempor. Vestibulum malesuada turpis pharetra odio imperdiet, nec laoreet velit venenatis. Donec elementum, nunc id auctor imperdiet, sapien risus commodo augue, quis porttitor velit purus ac lacus. Proin maximus malesuada finibus. Integer mattis rhoncus turpis in blandit. Etiam placerat pellentesque vestibulum.In elementum nibh quam, nec cursus augue rhoncus a. Maecenas pulvinar enim justo, sed lobortis tortor pulvinar vitae.

Fusce vel consectetur eros. Vivamus pharetra lorem sit amet felis fringilla vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, molestie sit amet nibh ac, aliquet malesuada velit. Fusce a dapibus diam. Praesent ac erat erat. Praesent eu nisl ex. Donec vel euismod metus. Quisque ac egestas erat. Duis sed vestibulum urna, vitae fermentum diam. Praesent non consequat nunc, vel tempor odio.


              </p>
              <br />
            </Col>
          </Row>
          <br />
         
          {/* Tab panes */}
         
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
