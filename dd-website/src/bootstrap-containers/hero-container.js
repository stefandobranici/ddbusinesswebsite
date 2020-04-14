import React from 'react';
import * as Components from '../components';
import { HeroContent } from '../content';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/components/herocontainer.css';




class Component extends React.Component {
    render() {
        return (
            <Container fluid class className="containerStyle">
                <Row className={'justify-content-md-center rowStyle'}>
                    <Col lg="4" className={'text-center columnStyle'}>
                        <Components.H1 content={HeroContent.title} />
                    </Col>
                </Row>
                <Row className={'justify-content-md-center rowStyle'}>
                    <Col lg="7" className={'text-center columnStyle'}>
                        <Components.Subhead content={HeroContent.content} />
                    </Col>
                </Row>
                <Row className={'justify-content-md-center rowStyle'}>
                    <Col lg="3" className={'text-center columnStyle'}>
                        <a href="#home" type="button" className={'btn btn-outline-info btn-lg btnStyle'}>Contact Us</a>
                    </Col>
                </Row>
                <Components.Line/>
                <Row className={'justify-content-md-center rowStyle'}>
                    <Col lg="3" className={'text-center columnStyle'}>
                        <div class="arrow bounce arrowStyle"><FontAwesomeIcon icon={faChevronDown} size="3x" /></div>
                    </Col>
                </Row>

            </Container>
        );
    }
}


export const HeroContainer = () => <Component />