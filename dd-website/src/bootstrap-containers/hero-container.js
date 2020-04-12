import React from 'react';
import * as Components from '../components';
import { HeroContent } from '../content';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bg from '../assets/bg.png';


const containerStyle = {
    'padding-top': '10vh',
    'height': '80vh',
    'background-image': `url(${bg})`,
    'background-repeat': 'no-repeat',
    'background-position': 'center',
   
};

const rowStyle = {
    'padding-bottom': '5vh'

}

const columnStyle = {

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
                    <Col lg="2" className={'text-center'} style={columnStyle}>
                         <Button variant= "primary" size= "lg" >Contact Us</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export const HeroContainer = () => <Component />