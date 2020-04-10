import React from 'react';
import * as Components from '../components';
import { HeroContent } from '../content';
import { Container, Row, Col } from 'react-bootstrap';

const style = {
    'padding-top': '18vh',
    'height': '80vh'
};
class Component extends React.Component {
    render() {
        return (
            <Container fluid style={style}>
                <Row  className={'justify-content-md-center'}>
                    <Col lg="2" className={'text-center'}><Components.H1 content={HeroContent.title} />
                    </Col>
                </Row>
                <Row  className={'justify-content-md-center'}>
                    <Col lg="7" className={'text-center'}><Components.Subhead content={HeroContent.content} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export const HeroContainer = () => <Component />