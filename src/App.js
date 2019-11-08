import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="VStability" scroll>
            <Navigation>
                <a href="/">Contact</a>
                <a href="/">Projects</a>
                <a href="/">GitHub</a>
                <a href="/">CV</a>
            </Navigation>
        </Header>
        <Drawer title="Info">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
