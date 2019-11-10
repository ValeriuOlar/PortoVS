import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contacts extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Valeriu Olariu </h2>
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-152.png"
                        alt="avatart"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>adable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lor </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2> 
                        <hr/>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contacts;