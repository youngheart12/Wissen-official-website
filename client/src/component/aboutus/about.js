import React,{Component} from 'react';
import Header from "../Header/completeHeader";
import Footer from "../Footer/footer";
import './about.css';
import {Row,Col ,Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button} from 'reactstrap';
//import Pic from '../../Images/wissen-logo.JPG';
class About extends Component
{
    render()
    {
        return (
        <div className="one1">
        <Header></Header>
        <div className="aboutPic">

        </div>
        <div className="afterPic">
            <h2>Who We Are ?</h2>
            <h1>Designers, Thinkers & Collaborators...</h1>
        </div>
        <div className="about">
            <div className="aboutUs">
                <h1> About Us</h1>
            </div>
            <Row>
                <Col md={{size:3, offset:1}} className="box">
                <Col md={{size:12}} className="inBox"> Vision </Col>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Col>
                <Col md="3" className="box">
                <Col md={{size:12}} className="inBox"> Mision </Col>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Col>
                <Col md="3" className="box">
                <Col md={{size:12}} className="inBox"> Strategy </Col>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Col>
            </Row>    
        </div>
        <div className="whoWeAre">
            <div className="whoSection1">
                <h1> Who We Are ? </h1>
            </div>
            <Row>
                <Col md={{size:3,offset:1}} className="box1">
                
      <Card className="roundPic">
        <CardImg className="yourImg" top width="100%" src={require("../../Images/mm.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle className="yourName"><u>Mayank Soni</u></CardTitle>
          <CardSubtitle className="yourDesign">CEO, Club WISSEN</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </Col>
    <Col md={{size:3}} className="box1">
                
      <Card className="roundPic">
        <CardImg className="yourImg" top width="100%" src={require("../../Images/dd.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle className="yourName"><u>Dilip Kumar</u></CardTitle>
          <CardSubtitle className="yourDesign">Co-CEO, Club WISSEN</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>      
        </CardBody>
      </Card>
     </Col>
     <Col md={{size:3}} className="box1"> 
                
      <Card className="roundPic">
        <CardImg className="yourImg" top width="100%" src={require("../..//Images/ss.png")} alt="Card image cap" style={{borderRadius:"50%"}} />
        <CardBody>
          <CardTitle className="yourName"><u>Saurabh Singh</u></CardTitle>
          <CardSubtitle className="yourDesign">Founder, Club WISSEN</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>   
        </CardBody>
      </Card>
     </Col>
                
            </Row>
        </div>
        <Footer> </Footer>

        </div>
        );
    }
}
export default About