import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";

export default class GiysiMagazalari extends Component {
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
            <h3 className="title font-weight-bold">Giysi Mağazaları</h3>

                 
               
                 <p>Kıyafet ve Giyim, yeni gelmiş olanlar veya gelmeyi düşünenler için büyük önem taşımaktadır.
                      Kanadada çoğu markanın fabrika satış mağazaları bulunmaktadır. İnternet üzerinden bir çok outlet mağazasını
                      bulabilirsiniz. Ayakkabıdan çamaşıra, günlük giyimden gece kıyafetine kadar her türlü ünlü markanın 
                      outlet store’larında aradığınız çoğu şeyi piyasa fiyatından daha uygun fiyatlarına bulabilirsiniz.
                      <br></br> <br></br>
                    İkisi birbirine bağlı olarak faaliyet gösteren Winners ve Marshall gibi mağazalarda da kaliteli ürünleri diğer 
                    birçok mağazaya oranla rahatlıkla bulabilirsiniz. Walmart gibi sürekli farklı ürünlerde indirim uygulayan 
                    mağazaları gezip aradığınız çoğu ürünü daha uygun fiyatlarla ulaşabilirsiniz.</p>

                     
                    <p>Ünlü markaların mağazalarının çoğu ülkenin en büyük şehirlerinde (Ottawa, Toronto, Vancouver, Calgary, Quebec) bulunur. </p>
                    <p>Kanada’nın üzerinde üç ayrı hava akımı bulunmaktadır Büyük Okyanus’tan serin ve nemli hava, Kuzey Kutup Bölgesi’nden 
                        soğuk ve kuru hava, Meksika Körfezi ve Karayip Denizi’nden ise sıcak ve nemli hava akımları gelmektedir.Bu sebeple 
                        Kanada’da kışlık olarak yünlü ve kalın palto, bere, atkı, kazak ve kaymaz bot gibi giysiler; yaz 
                        için çok ince olmayan ve daha çok bahar gibi geçiş mevsimlerinde giyilen hafif kalınlıkta giysiler tercih edilebilir.</p>
                 
                 <p>Torondo'daki başlıca Alışveriş Merkezleri</p>
                 <ul>
                     <li>Yorkdale Shopping Centre</li>
                     <li>Scarborough Town Centre</li>
                     <li>CF Sherway Gardens</li>
                     <li>CF Fairview Mall</li>
                     <li>CF Shops at Don Mills</li>
                     <li>Pacific Mall</li>
                     <li>CF Toronto Eaton Centre</li>
                     <li>Vaughan Mills</li>
                     <li>Bayview Village Shops</li>
                     <li>Square One Shopping Centre</li>
                 </ul>
                 
                 </Col>
                </Row>
           
        </Container>  <br></br> <br></br> <br></br>
        <DemoFooter />
            </div>
        )
    }
}
