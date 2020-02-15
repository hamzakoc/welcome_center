import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";


export default class OzelGidalar extends Component {
    render() {
        return (
            <div>
                <ExamplesNavbar />
      <ProfilePageHeader />
        <Container>
        <hr></hr>
        <GidaalisverisNavbar />
        <hr></hr>
          
         
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Özel Gıdalar</h3>

            
                 <p><strong>Özel diyet gereksinimlerim varsa ne yapmalıyım?</strong></p>
                 <p>Diyabet gibi özel diyet endişeleriniz varsa veya vejeteryansanız, gıda bankası personeline söyleyebilirsiniz. 
                     Bazı gıda bankaları belirli dini gruplara hizmet eder ve helal veya koşer gıdaları gibi dini beslenme 
                     ihtiyaçlarını karşılayabilir. Tavsiye için 211 Ontario ile temasa geçin, diyet gereksinimlerinizi 
                     belirtin, böylece sizi en uygun gıda bankasına yönlendirebilirler.</p>

                     <p><strong>Planlı Yiyecek Alışverişi</strong></p>
                     <p> Bazı topluluk organizasyonları size yemek planları ve alışveriş önerileri konusunda yardımcı 
                        olacak programlar sunabilirler. </p>
                         
                        <p><strong>Daha Fazla Bilgi İçin</strong></p>
                         <ul>
                             <li><a href="https://211ontario.ca/" target="_blank">211 Ontario</a> - Ontario'nun her yerinde gıda bankaları ve diğer topluluk hizmetleri için arayabilirsiniz.</li>
                             <li><a href="https://settlement.org/ontario/employment/financial-assistance/" target="_blank">Mali Yardım</a> - Mali yardım çeşitli devlet programlarında mevcuttur. Ne tür bir finansal 
                                 destek alabileceğinizi öğrenin.</li>
                             <li><a href="https://www.mcss.gov.on.ca/en/mcss/programs/social/ow/index.aspx" target="_blank">Ontario Works</a> - Ontario Works programı için. 
                                 Topluluk ve Sosyal Hizmetler Bakanlığından.</li>
                            
                         </ul>
                 
                 </Col>
                </Row>
            
        </Container>  <br></br> <br></br> <br></br>
        <DemoFooter />
            </div>
        )
    }
}
