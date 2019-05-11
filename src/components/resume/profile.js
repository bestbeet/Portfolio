import React, {Component} from 'react';
import {Container} from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import {Avatar,Divider} from "antd";

let iconResponsive = {
    fontSize: "5vw",
    display: "flex",
    justifyContent: "space-around",
    justifyItems: "center"
}

class Profile extends  Component {
    render() {
       return (
           <Container className = "card-container">
               <ScrollAnimation animateIn="fadeIn">
                   <Container>
                       <ProfilePicture/>
                       <Bio/>
                   </Container>
               </ScrollAnimation>
           </Container>


       )
    }
}

export default Profile;

const ProfilePicture = () => {
    return (
        <div className="row">
            <Container style={{textAlign:"center"}}>
                <br/>
                <Container>
                    <Avatar src="http://graph.facebook.com/2357769200950904/picture?type=large" size={200}/>
                </Container>
                <div className="NameCaption"><br/>Nattawat  Thong-aram</div>
                <div className="NameCaption"><br/>Best</div>
            </Container>
        </div>

    )
}
const Bio = () => {

    return (
        <div className="row">
            <div className="column"/>
            <div className="column">
                <Container>
                    <Divider orientation="left">
                        <br/>
                        <div className="head">My Info</div>
                        <br/>
                    </Divider>
                    <div className="content">
                        <p>Date of Birth : 6 November 1995</p>
                        <p>Education : Faculty of Engineering (Computer Engineering)</p>
                        <p>Prince of Songkhla University Phuket Campus</p>
                        <p>Major :
                            <div className= "interest">
                                <li>Information Engineering</li>
                                <li>Computer Networks</li>
                                <li>Computer System Design</li>
                            </div>
                        </p>
                        <p>Address : 62/3 M.4  Khao Khao , Thung song , Nakhon Si Thammarat , Thailand</p>
                        <p>Interesting :
                            <div className="interest">
                                <li>Web Develop</li>
                                <li>Mobile App</li>
                                <li>Database</li>
                                <li>IoT Maker</li>
                            </div>
                        </p>
                        <p>Now Focus : React , Java , JavaScript , Dart , C , C++ , Arduino , CSS , HTML , Python</p>
                        <p>Next Focus : Golang , Scalar </p>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export {ProfilePicture,Bio};


