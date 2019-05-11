import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Profile from './resume/profile';
import Skills from './resume/skills';
import Contact from './resume/contact';
import Competitions from './resume/competitions';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact}/>
        <Route path="/competitions" component={Competitions}/>

        
    </Switch>
);

export default Main;