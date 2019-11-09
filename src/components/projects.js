import React, {Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
               <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 1</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/*Project 2*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 2</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/*Project 3*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 3</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
               </div>
                )
        }else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 1</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/*Project 2*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 2</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/*Project 3*/}
                <Card shadow={5}style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Green', height: '172', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} > React Project 3</CardTitle>
                <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
               </div>
            )
        }else if(this.state.activeTab === 2) {
            return (
            <div><h1>This is Vue.JS</h1></div>
            )
        }else if(this.state.activeTab === 3) {
            return (
            <div><h1>This is MongoBD</h1></div>
            )
        }else if(this.state.activeTab === 4) {
            return (
            <div><h1>This is Java</h1></div>
            )
        }else if(this.state.activeTab === 5) {
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
            
                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;