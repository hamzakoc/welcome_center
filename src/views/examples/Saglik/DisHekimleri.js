import React, { Component } from 'react'
import { Container, Col, Row} from 'reactstrap';


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import SaglikPageHeader from "components/Headers/SaglikPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SaglikNavbar from "components/Navbars/SaglikNavbar.js";

export default class DisHekimleri extends Component {
    render() {
        return (
            <div>
            <ExamplesNavbar />
               <SaglikPageHeader />
                  <Container>
                  <hr></hr>
                  <SaglikNavbar/>
                  <hr></hr>
  
                  <Row>
                        <Col className="ml-auto mr-auto " md="8">
                         
                                <h3 className="title font-weight-bold">Aile Hekimi (Family Doctor) </h3>
                                <p >Aile hekimi de mahkeme sonrasi OHIP kapsaminda yararlanilacak hizmetlerden birisidir. 
                                    Genel olarak saglik sorunlarinizla ilgilenecek bir GP Pratisyen Hekim e duzenli araliklarla gidilebilir. 
                                    Bu hekimi secerken farkli yollar kullanilabilir. Mahallenizde veya size yakin yerlerdeki, arkadaslarinizdan 
                                    duydugunuz saglik kuruluslarinda veya kendi kliniklerinde hasta kabul eden doktorlarla irtibata gecerek, 
                                    onlarin sizin aile hekiminiz olmasini talep edebilirsiniz. Detayli bilgi icin
                                    <a href="https://www.ontario.ca/page/find-family-doctor-ornurse-practitioner" target="_blank"> tıklayınız </a> </p>
  
                                <p><strong>İlaç ve Eczaneler</strong> </p>
                                <p>Daha once size yazilmis olan ilaclari doktorlara gosterdikten sonra recete ettirebilir ve eczanelerden 
                                    satin alabilirsiniz. Bunun disinda eczaneler sehrin her yerinde ulasilabilir sekilde gunluk kullanimda 
                                    recetesiz satilan ilaclari satmaktadirlar. Eczanelerden recete ile alinan ilaclarin odemesi konusunda 
                                    sigorta kapsaminiz onemlidir. Hangi sigorta kapsaminda iseniz (IFHP veya OHIP) onun kapsamina gore odeme yaparsiniz. 
                                    Hangi servislerin ne kosullarda, nasil karsilandigini ogrenmek icin 
                                    <a href="http://www.health.gov.on.ca/en/public/programs/drugs/" target="_blank"> tıklayınız </a></p>
  
                                <p><strong>Engelli Hizmetleri</strong> </p>
                                <p>Engelliler icin verilen hizmetler yasa, engelin cesidine, ve bunlar gibi bir cok faktore gore degismektedir. 
                                    En uygun hizmetin alinabilmesi icin <a href="https://connectability.ca/en/" target="_blank"> adresinden </a>
                                     yaralanilabilir.  </p>
                               
  
                        </Col>
                        </Row>
                   </Container><br></br> <br></br> <br></br>
                   <DemoFooter />
               </div>         
        )
    }
}
