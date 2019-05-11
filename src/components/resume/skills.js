import React, {Component} from 'react';
import {Container} from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import {Divider,Row,Col} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava ,faHtml5 , faCss3 , faReact ,faJs , faVuejs ,faPython ,faDocker ,faAndroid,faCuttlefish} from '@fortawesome/fontawesome-free-brands'

let iconResponsive = {
    fontSize: "5vw",
    display : "flex",
    justifyContent : "space-around",
    justifyItems : "center"
}


class Skills extends  Component {
    render() {
        return (
            <Container className = "card-container">
                <ScrollAnimation animateIn="fadeIn">
                    <Container>
                        <Skill/>
                    </Container>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default Skills;

const Skill = () => {

    return (
        <Container>
            <br/>

            <Divider>
                <div className="head">
                    Skills
                </div>
            </Divider>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row gutter={1000}>
                <Col span={12}>
                    <Divider>
                        <div className="head">Intermediate</div>
                    </Divider>
                    <Container style={iconResponsive}>
                        <FontAwesomeIcon icon={faVuejs}/>
                        <FontAwesomeIcon icon={faDocker}/>
                        <FontAwesomeIcon icon={faHtml5}/>
                        <FontAwesomeIcon icon={faCss3}/>


                    </Container>
                </Col>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Col span={12}>
                    <Divider>
                        <div className="head">Basic</div>
                    </Divider>
                    <Container style={iconResponsive}>
                        <FontAwesomeIcon icon={faCuttlefish}/>
                        <FontAwesomeIcon icon={faReact}/>
                        <FontAwesomeIcon icon={faJava}/>
                        <FontAwesomeIcon icon={faJs}/>
                        <FontAwesomeIcon icon={faPython}/>
                        <FontAwesomeIcon icon={faAndroid}/>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
export {Skill}


