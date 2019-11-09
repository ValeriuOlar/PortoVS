import React, {Component } from 'react';
import {Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h1>This is React.js</h1> 
                </div>
            )
        }else if(this.state.activeTab === 1) {
            return (
            <div><h1>This is React</h1></div>
            )
        }else if(this.state.activeTab === 2) {
            return (
            <div><h1>This is Angular</h1></div>
            )
        }else if(this.state.activeTab === 3) {
            return (
            <div><h1>This is Vue.JS </h1></div>
            )
        }else if(this.state.activeTab === 4) {
            return (
            <div><h1>This is MongoBD</h1></div>
            )
        }else if(this.state.activeTab === 5) {
            return (
            <div><h1>This is Java</h1></div>
            )
        }else if(this.state.activeTab === 6) {
            return (
            <div><h1>This is Python</h1></div>
            )
        }
    }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue.JS</Tab>
                    <Tab>MongoBD</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>
            
            <section className="projects-grid">
                {this.toggleCategories()}
            </section>
            </div>
        )
    }
}

export default Projects;