import React, {Component } from 'react';
import {Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-g">
                    <Cell col={12}>
                        <img
                        src="https://myrealdomain.com/images/avatar-icon-5.png"
                        alt="avatar"
                        className="img-avatar"
                        />
                        <div className="text-banner">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React/React Native | NodeJS | Express | MongoDB | Python | Django/Flask </p>
                       <div className="social-links">
                           {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                             {/* GitHub */}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                             {/* FreeCodeCamp */}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                            </a>
                             {/* YouTube */}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true"/>
                            </a>
                       </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;