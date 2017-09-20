import React from 'react';
import {Router, Route} from 'react-router';
import Data from '../services/Data'
import Main from './Main';
import Stream from './Stream';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 'main',
            pageTitle: 'Popular Streamings',
            loading: false,
            errors: '',
            streams: []
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    filterData(data, streamType) {
        let filteredData = data.filter((d) => {
            return d.releaseYear >= 2010 && d.programType == streamType;
        });
        filteredData.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA > titleB) return 1;
            if (titleA < titleB) return -1;

            return 0;
        });
        filteredData = filteredData.slice(0, 21);

        return filteredData;
    }
    handleMenuClick(menu) {
        console.log('click.....', menu);
        this.setState({
            loading: true,
            errors: ''
        });
        const data = new Data();
        data.getData('sample.json').then(jData => {
            const streams = this.filterData(jData.entries, menu.type);
            this.setState({
                loading: false,
                streams: streams,
                currentPage: menu.type,
                title: menu.title
            });
        }).catch(ex => {
            this.setState({
                loading: false,
                streams: [],
                errors: 'Oops, Something went wrong...'
            });
        })
    }

    
    render() {
        const arrMenus = [
            {type: 'movie', title: 'Popular Movies', path: '/movies'},
            {type: 'series', title: 'Popular Series', path: '/series'}
        ];
        return(
            <div>
                <div className="page-title">{this.state.pageTitle}</div>

                {
                    this.state.currentPage == 'main' && 
                    <Main 
                        menus={arrMenus} 
                        handleMenuClick={this.handleMenuClick} 
                    />
                }

                {
                    (this.state.currentPage == 'movie' || this.state.currentPage == 'series') &&
                    <Stream streams={this.state.streams} />
                }

                {this.state.loading && <div>Loading...</div>}

                {   
                    this.state.errors && 
                    <div>
                        {this.state.errors}
                    </div>
                }
            </div>
        )
    }
}