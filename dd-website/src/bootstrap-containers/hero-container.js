import React from 'react';
import * as Components from '../components';
import { HeroContent } from '../content';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgleft from '../assets/bgleft.png';
import bgright from '../assets/bgright.png';



const containerStyle = {
    'padding-top': '10vh',
    'height': '72vh',
    'background-image': `url(${bgleft}), url(${bgright})`,
    'background-repeat': 'no-repeat, no-repeat',
    'background-position': 'left, right',
    'background-size': '50vw, 50vw'
};

const rowStyle = {
    'padding-bottom': '5vh'

}

const columnStyle = {

}

const btnStyle = {
    'padding': '10px 20px',
    'font-size': '30px',
    'border-radius': '10px',
    'width': '60%',
    'color':'white',
    'font-weight':'bold',
    'border-color': '#66FCF1'
}

const scrollStyle = {
    'behavior': 'smooth',
    'buttonBackgroundColor': '66FCF1',
    'iconType': 'arrow-down',
    'fontSize': '50px',
    'buttonColor': 'white',
    'targetId': 'Line',
    
}


class Component extends React.Component {
    render() {
        return (
            <Container fluid style={containerStyle}>
                <Row className={'justify-content-md-center'} style={rowStyle}>
                    <Col lg="4" className={'text-center'} style={columnStyle}>
                        <Components.H1 content={HeroContent.title} />
                    </Col>
                </Row>
                <Row className={'justify-content-md-center'} style={rowStyle}>
                    <Col lg="7" className={'text-center'} style={columnStyle}>
                        <Components.Subhead content={HeroContent.content} />
                    </Col>
                </Row>
                <Row className={'justify-content-md-center'} style={rowStyle}>
                    <Col lg="3" className={'text-center'} style={columnStyle}>
                        <a href="#" type="button" class="btn btn-outline-info btn-lg" style={btnStyle}>Contact Us</a>
                    </Col>
                </Row>
               
                
            </Container>
        );
    }
}


export const HeroContainer = () => <Component />