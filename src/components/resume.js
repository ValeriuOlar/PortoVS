import React, {Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experiece from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
             <Grid>
                <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                    <img
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatar"
                    style={{height: '200px'}}
                    />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Valeriu Olariu</h2>
                    <h4 style={{color: 'grey'}}>Programer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including vers</p>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Lorem Ipsum is simply dummy text</p>
                        <h5>Phone</h5>
                        <p>(231) 1314 123</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebiste.ie</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2015}
                    endYear={2019}
                    schoolName="NCIRL"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including vers"
                    />
                     <Education
                    startYear={2019}
                    endYear={2019}
                    schoolName="Code Institute"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including vers"
                    />
                    <hr style={{borderTop: '3p solid #e22947'}}/>
                    <h2>Experiece</h2>

                    <Experiece
                     startYear={2018}
                     endYear={2018}
                     jobName="Developer"
                     jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including vers"
                     />
                     <Experiece
                     startYear={2019}
                     endYear={2019}
                     jobName="Developer"
                     jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including vers"
                     />
                     <hr style={{borderTop: '3p solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills
                      skill="HTML/CSS"
                      progress={80}
                    />
                    <Skills
                      skill="JS"
                      progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                    />
                    <Skills
                      skill="Angular"
                      progress={25}
                    />
                    <Skills
                      skill="Vue.js"
                      progress={20}
                    />
                    <Skills
                      skill="Java"
                      progress={60}
                    />
                    <Skills
                      skill="Python"
                      progress={70}
                    />
                    <Skills
                      skill="SQL"
                      progress={100}
                    />
                </Cell>
             </Grid>
            </div>
        )
    }
}

export default Resume;
