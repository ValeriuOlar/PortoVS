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
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;