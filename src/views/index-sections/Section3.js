import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardDeck, CardBody,CardGroup, CardColumns} from 'reactstrap';
import axios from 'axios';

import '../../assets/css/exchange.css';

const duyurular = {
  color: '#CB8C1D',
  backgroundColor: ' #4C3327',
  textTransform: "uppercase",
  paddingLeft: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',
  textAlign: 'center',
  borderRadius: '10px',
};

const News = props => (


   
      <Card  >
    
        <CardBody >
          <CardTitle className="title font-weight-bold" style={duyurular} ><bold><strong  ><p>{props.news.title}</p></strong></bold></CardTitle>
          
          <CardText><p>{props.news.description}</p></CardText>
         
      <CardText className="text-muted">Son güncelleme tarihi {props.news.date.substring(0,10)}</CardText>
  
        </CardBody>
      </Card>
    


)

export default class NewsList extends Component {
  constructor(props) { 
    super(props);


    this.state = {news: []};
  }

  componentDidMount() {
    axios.get('https://wlcmcntr.herokuapp.com/admin/news')
      .then(response => {
        this.setState({ news: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  newsList() {
    return this.state.news.map(currentnews => {
      return <News className="card-deck card" news={currentnews}  key={currentnews._id}/>;
    })
  }

  render() {
    return (
      <div>

        <div class="sec3-subimg1"> 
               </div>
               <div className="section ">
      <img
                  alt="..."
                  className="img-responsive"
                  src={require("assets/img/duyurular.png")}
                  style={{ width: "100%" }}
                />
      </div>
        <CardDeck>

            <CardColumns  >  
        { this.newsList() }
           </CardColumns>
            
           </CardDeck>
             <div class="sec3-subimg2">
               
              </div>




        </div>
      
    )
  }
}