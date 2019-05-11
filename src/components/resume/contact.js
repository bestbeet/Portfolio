import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import {Avatar} from "antd";


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nattawat Thong-aram</h2>
                        <Avatar src="http://graph.facebook.com/2357769200950904/picture?type=large" size={200}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I am a programmer analyst seeking a developer position in the field of Java program and web design, where I can apply my knowledge and skills for continuous improvement. I have experience in designing databases on website and write android application that drive products to success.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+66) 908745250
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        bestbeet2538@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
