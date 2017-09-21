import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Streamings from '../components/Streamings';
import Data from '../services/Data';

import React from 'react';
import { mount } from 'enzyme';

describe('Filter JSON Data', () => {
    const d = new Data();
    const jData = [
        {
            "title": "Wolf Creek",
            "programType": "series",
            "releaseYear": 2017
        },
        {
            "title": "Billions",
            "programType": "movie",
            "releaseYear": 2016
        },
        {
            "title": "Better Call Saul",
            "programType": "movie",
            "releaseYear": 2010
        },
        {
            "title": "Better Call Saul 2",
            "programType": "movie",
            "releaseYear": 2009
        }
    ];

    test('should return 2 movies', () => {
        expect(d.filterData(jData, 'movie').length).toBe(2);
    });
    test('should return 1 series', () => {
        expect(d.filterData(jData, 'series').length).toBe(1);
    });

});

describe('Rendering components', () => {
    test('Streamings Component is rendered', () => {
        const title = 'Popular Movies';
        const box = mount(
            <Streamings title='Popular Movies'type='movie' />
        );
        const item = box.find('.title');
        expect(item.text()).toBe(title);
    });

    test('Home Component is rendered', () => {
        const title = 'Popular Streamings';
        const box = mount(
            <Router> 
                <Route>
                    <Home title="Popular Streamings" /> 
                </Route>
            </Router>
        );
        const item = box.find('.title');
        expect(item.text()).toBe(title);
    });
});



