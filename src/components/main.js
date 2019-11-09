import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from '.landingpage';
import AboutMe from './aboutme';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
)

export default Main;