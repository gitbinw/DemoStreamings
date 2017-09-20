import React from 'react';

export default function Stream(props) {
    const {streams} = props;

    let jsxStreams = null;
    if (streams != undefined) {
        jsxStreams = streams.map((m, i) => {
            return (
                <div key={i}>{m.title}</div>
            );
        });
    }

    return(
        <div>
            <div className="flex-container">
                {jsxStreams}
            </div>          
        </div>
    );
}