
import React from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
 

  return (
    <Navbar className="justify-content-start float-left" >
    
          <Nav navbar>
          <NavItem>
              <NavLink to="/basvurusurecleri" tag={Link}>
                <i className="" /> Basvuru Surecleri
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hukukiyardim" tag={Link}>
                <i className="" /> Hukuki Yardim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ulasim" tag={Link}>
                <i className="" /> Ulasim
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/telefonhatlari" tag={Link}>
                <i className="" /> Telefon Hatlari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/evinterneti" tag={Link}>
                <i className="" /> Ev Interneti
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kutuphanekarti" tag={Link}>
                <i className="" /> Kutuphane Karti
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/ehliyet" tag={Link}>
                <i className="" /> Ehliyet
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/bankahesaplari" tag={Link}>
                <i className="" /> Banka Hesaplari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kredikartlari" tag={Link}>
                <i className="" /> Kredi Kartlari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kiralamaalimsatim" tag={Link}>
                <i className="" /> Kiralama, Alim-Satim
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/sigortalar" tag={Link}>
                <i className="" /> Sigortalar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/seyehatbelgeleri" tag={Link}>
                <i className="" /> Seyehat Belgeleri
              </NavLink>
            </NavItem>
                                
          </Nav>
    </Navbar>
  );
}

export default IndexNavbar;
