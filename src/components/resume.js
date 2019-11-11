import React, {Component } from 'react';
import {Grid, Cell } from 'react-mdl';
class Resume extends Component {
    render() {
        return(
            <div>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatar"
                    style={{height: '200px'}}
                    </div>
                </Cell>
                <Cell className="resume-right-col" col={8}>Rights Side</Cell>
            </div>
        )
    }
}

export default Resume;