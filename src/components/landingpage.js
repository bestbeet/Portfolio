import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Port from '../image/Portfolio.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook,faGithub,faTwitch,faYoutube} from '@fortawesome/fontawesome-free-brands';
import './css/style.css';
import './css/icon-animate.css';

class LandingPage extends Component {
    render() {
        return(

                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                                src={Port}
                                alt="avatar"
                                className="avatar-img"
                            />

                            <div className="banner-text">
                                <h1>Developer</h1>

                                <hr/>


                                <div className="social-links">

                                    {/* Twitch */}

                                    <a href="https://www.twitch.tv/bossungaming" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faTwitch}/>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/best.bossun" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </a>

                                    {/* Github */}
                                    <a href="https://github.com/bestbeet" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    {/* Youtube */}
                                    <a href="https://www.youtube.com/channel/UCkM1aUHTMMbWCn7fyQz2WRA?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube}/>
                                    </a>

                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>

        )
    }
}

export default LandingPage;
