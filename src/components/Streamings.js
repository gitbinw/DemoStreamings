import React from 'react';
import Data from '../services/Data.js';

export default class Streamings extends React.Component {
    constructor(props) {
		super(props);
		
		this.state = {
			loading: false,
            errors: '',
			streamings: []
		};
	}
	
	componentDidMount() {
        const objData = new Data();
        this.setState({loading: true, errors: ''});

        objData.getData('sample.json').then((jData) => {
            if (jData && jData.entries && jData.entries.length > 0) {
                this.setState({
                    loading: false,
                    streamings: objData.filterData(jData.entries, this.props.type)
                });
            } else {
                this.setState({
                    loading: false,
                    errors: 'Oops, no streamings found...'
                });
            }
        }).catch((ex) => {
            this.setState({
                loading: false,
                errors: 'Oops, something went wrong...'
            });
        });
	}

    componentWillUnmount() {
        this.setState({
            loading: false,
            errors: '',
            streamings: []
        });
    }

    render() {
        const {title} = this.props;
        const streams = this.state.streamings;

        let jsxStreams = null;
        if (streams != undefined) {
            jsxStreams = streams.map((m, i) => {
                return (
                    <div key={i} className="item">
                        <img src={m.images['Poster Art'].url} height="200px" />
                        <span>{m.title}</span>
                    </div>
                );
            });
        }

        return(
            <div>
                <h3 className="title">{title}</h3>
                <div>
                    <div className="item-container">
                        {jsxStreams}
                    </div>   

                    {
                        this.state.loading && 
                        <div className="main-message">Loading...</div>
                    }

                    {   
                        this.state.errors && 
                        <div className="main-message">
                            {this.state.errors}
                        </div>
                    }   
                </div>   
            </div>
        );
    }
}