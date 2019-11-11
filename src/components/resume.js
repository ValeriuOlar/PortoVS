import React, {Component } from 'react';
import {Grid, Cell } from 'react-mdl';
class Resume extends Component {
    render() {
        return(
            <div>
                <Cell col={4}>Left Side</Cell>
                <Cell className="resume-right-col" col={8}>Rights Side</Cell>
            </div>
        )
    }
}

export default Resume;