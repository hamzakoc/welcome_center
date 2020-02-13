
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import Saglik from "views/examples/Saglik.js";
import Barinma from "views/examples/Barinma.js";
import Istihdam from "views/examples/Istihdam.js";
import Egitim from "views/examples/Egitim.js";
import Kultursanat from "views/examples/Kultursanat.js";
import Gidaalisveris from "views/examples/Gidaalisveris.js";
import Ozelbakim from "views/examples/Ozelbakim.js";
// others

// Belgeler
import Belgeler from "views/examples/Belgeler/Belgeler.js";
import BasvuruSurecleri from "views/examples/Belgeler/BasvuruSurecleri";
import HukukiYardim from 'views/examples/Belgeler/HukukiYardim';
import SosyalYardim from 'views/examples/Belgeler/SosyalYardim';
import Ulasim from 'views/examples/Belgeler/Ulasim';
import TelefonHatti from 'views/examples/Belgeler/TelefonHatti';
import EvInterneti from 'views/examples/Belgeler/EvInterneti';
import KutuphaneKarti from 'views/examples/Belgeler/KutuphaneKarti';
import Ehliyet from 'views/examples/Belgeler/Ehliyet';
import BankaHesaplari from 'views/examples/Belgeler/BankaHesaplari';
import KrediKartlari from 'views/examples/Belgeler/KrediKartlari';
import KiralamaAlimSatim from 'views/examples/Belgeler/KiralamaAlimSatim';
import Sigortalar from 'views/examples/Belgeler/Sigortalar';
import SeyehatBelgeleri from 'views/examples/Belgeler/SeyehatBelgeleri';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route  path="/belgeler" render={props => <Belgeler {...props} />} />
      <Route  path="/saglik" render={props => <Saglik {...props} />} />
      <Route  path="/barinma" render={props => <Barinma {...props} />} />
      <Route  path="/istihdam" render={props => <Istihdam {...props} />} />
      <Route  path="/egitim" render={props => <Egitim {...props} />} />
      <Route  path="/kultursanat" render={props => <Kultursanat {...props} />} />
      <Route  path="/gidaalisveris" render={props => <Gidaalisveris {...props} />} />
      <Route  path="/ozelbakim"  render={props => <Ozelbakim {...props} />} />

         {/* Belgeler */}
        <Route path="/basvurusurecleri" render={props => <BasvuruSurecleri {...props} />} />
        <Route  path="/hukukiyardim" render={props => <HukukiYardim {...props} />} />
        <Route  path="/sosyalyardim" render={props => <SosyalYardim {...props} />} />
        <Route  path="/ulasim" render={props => <Ulasim {...props} />} />
        <Route  path="/telefonhatti" render={props => <TelefonHatti {...props} />} />
        <Route  path="/evinterneti" render={props => <EvInterneti {...props} />} />
        <Route  path="/kutuphanekarti" render={props => <KutuphaneKarti {...props} />} />
        <Route  path="/ehliyet" render={props => <Ehliyet {...props} />} />
        <Route  path="/bankahesaplari"  render={props => <BankaHesaplari {...props} />} />
        <Route  path="/kredikartlari" render={props => <KrediKartlari {...props} />} />
        <Route  path="/kiralamaalimsatim"  render={props => <KiralamaAlimSatim {...props} />} />
        <Route  path="/sigortalar" render={props => <Sigortalar {...props} />} />
        <Route  path="/seyehatbelgeleri"  render={props => <SeyehatBelgeleri {...props} />} />
        <Redirect to="/index" />

    </Switch>  
    </BrowserRouter>,
  document.getElementById("root")
);
