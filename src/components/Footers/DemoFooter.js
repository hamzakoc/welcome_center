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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'


function DemoFooter() {

  const navcolor = {
    backgroundColor: 'black',
    color: "white",
    textDecoration: 'none'
  
  };
  
const itemscolor = {
    color: "white",
    textDecoration: 'none'
  
  };



  return (
    <footer className="footer footer-black ">
    
      <div className="page-footer font-small unique-color-dark">
             <div style={navcolor} className="text-center text-white "  >           
                    
                   <br></br>
                 
                
                    <div className=" text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Canada Welcome Centre</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                            <p>We are here to help all newcomers…</p>
                        </div>
                    
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">OUR PARTNERS</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                            <p><a href="https://anatolian.ca/" target="_blank"><img src="https://anatolian.ca/wp-content/uploads/2018/10/anatolian-cultural-centre.jpg" width="130" height="40" ></img></a></p>
                            <p><a href="http://muslimsforwhiteribbon.com/" target="_blank"><img src="https://northernlightsrelief.ca/wp-content/uploads/2015/07/Muslims_for_White_Ribbon_White_Logo-small.jpg" width="130" height="40"></img></a></p>
                            <p><a href="https://www.embracerelief.org/" target="_blank"><img src="https://www.embracerelief.org/wp-content/uploads/2017/12/logo.png" width="130" height="40"></img></a></p>
                            <p><a href="https://anatolianheritage.ca/" target="_blank"><img src="https://anatolianheritage.ca/wp-content/uploads/2018/11/AHFLogo2.png" width="130" height="40" ></img></a></p>               
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Faydali Linkler</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                        <p><a href="/bizeulasın" style={{color:"white"}}>Soru Sorun</a></p>
                        <p><a href="/Yardim" style={{color:"white"}}>Yardim</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact us</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                        <p><i className="fas fa-home mr-3"></i> 30 Rayette Rd Concord, ON L4K 2G3</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@northernlightsrelief.ca</p>
                        <p><i className="fas fa-phone mr-3"></i> +1 (416) 882-6454</p>
                        </div>
                    </div>
          </div>
      </div>
</div>

      
    </footer>
  );
}

export default DemoFooter;
