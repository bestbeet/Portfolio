import React,{ Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">BossunWebProfile</Link>} scroll>
                        <Navigation>
                            
                            <Link to="/profile">Profile</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/competitions">Competition</Link>
                            <Link to="/contact">Contact</Link>

                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                        <Navigation>
                            
                            <Link to="/profile">Profile</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/competition">Competition</Link>
                            <Link to="/contact">Contact</Link>

                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>

        );
    }
}
export default App;