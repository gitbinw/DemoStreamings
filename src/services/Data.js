"use strict";

/*Note: fetch doesn't export the module*/
import 'whatwg-fetch';

export default class Data {
    constructor() {}
    
    /*Wrap Fetch in a new Promise function*/
    getData(url) {
        const objPromise = new Promise((resolve, reject) => {
            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    resolve(json);
                }).catch(function(ex) {
                    reject(ex);
                });
        });
        
        return objPromise;
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
}