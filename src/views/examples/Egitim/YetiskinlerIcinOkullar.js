import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/EgitimPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import EgitimNavbar from "components/Navbars/EgitimNavbar";

export default class YetiskinlerIcinOkullar extends Component {
    render() {
        return (
            <div>
             <ExamplesNavbar />
      <ProfilePageHeader />
        <Container>
        <hr></hr>
        <EgitimNavbar />
        <hr></hr>
          

          <Row>
            <Col className="ml-auto mr-auto " md="8">
                 <div>
                 <h3 className="title font-weight-bold">Yetiskinler İçin Okullar</h3>
                 <br></br>
                 <p>İçerik üretiliyor.Anlayışınız için teşekkür ederiz...</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus mauris eu 
                     nisl commodo condimentum. Maecenas elit mi, mattis in pretium eu, lacinia vel lacus.
                      Sed rhoncus elit sollicitudin, tempor tellus eget, imperdiet ligula. Aliquam tristique
                       et nisi sed maximus. Suspendisse bibendum mauris quis metus mattis iaculis. Phasellus
                        risus leo, sodales vel nunc eu, dapibus tempus arcu. Sed ullamcorper elementum libero
                         lacinia accumsan. Curabitur pharetra ex odio, non fringilla nibh laoreet at. Mauris
                          cursus dolor ante, eget cursus nunc ornare convallis. Mauris lectus justo, ultrices 
                          id odio vitae, pulvinar malesuada massa. Aliquam convallis turpis ut justo laoreet auctor.
                          <br></br><br></br>
                          Etiam posuere lacus enim, id fermentum massa pretium sit amet. Curabitur non tellus
                           elementum, laoreet purus sit amet, pulvinar lacus. Donec eget blandit ipsum. Maecenas 
                           maximus vulputate consequat. Suspendisse facilisis dui ut tristique elementum. Nulla
                            pulvinar laoreet tempor. Vestibulum malesuada turpis pharetra odio imperdiet, 
                            nec laoreet velit venenatis. Donec elementum, nunc id auctor imperdiet, 
                            sapien risus commodo augue, quis porttitor velit purus ac lacus. Proin maximus
                             malesuada finibus. Integer mattis rhoncus turpis in blandit. Etiam placerat 
                             pellentesque vestibulum.In elementum nibh quam, nec cursus augue rhoncus a. Maecenas 
                             pulvinar enim justo, sed lobortis tortor pulvinar vitae. 
                             <br></br><br></br>
                             Fusce vel consectetur eros. 
                             Vivamus pharetra lorem sit amet felis fringilla vehicula. Class aptent taciti sociosqu 
                             ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, molestie 
                             sit amet nibh ac, aliquet malesuada velit. Fusce a dapibus diam. Praesent ac erat erat. 
                             Praesent eu nisl ex. Donec vel euismod metus. Quisque ac egestas erat. Duis sed vestibulum 
                             urna, vitae fermentum diam. Praesent non consequat nunc, vel tempor odio.</p>
                            
                        
                 </div>
                 </Col>
                </Row>
            
        </Container><br></br> <br></br> <br></br>
        <DemoFooter />
            </div>
        )
    }
}
