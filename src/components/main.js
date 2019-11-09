import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/landing" component={LandingPage} />


    </Switch>
)

export default Main;