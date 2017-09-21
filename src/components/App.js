import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Streamings from './Streamings';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import style from '../../scss/main/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOn: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({
            menuOn: !this.state.menuOn
        });
    }
    render() {
        return(
            <div>
                <Header menuOn={this.state.menuOn} toggleMenu={this.toggleMenu} />
                <div className="main">
                    <Router>
                        <Switch>
                            <Route exact path="/" render={(props) => (<Home {...props} title='Popular Streamings' />) } />
                            <Route path="/movies" render={(props) => (<Streamings {...props} type='movie' title='Popular Movies' />) } />
                            <Route path="/series" render={(props) => (<Streamings {...props} type='series' title='Popular Series' />) } />
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </div>
        )
    }
}