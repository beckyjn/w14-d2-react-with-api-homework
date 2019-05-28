import React, {Component} from 'react';
import ChartList from '../components/ChartList';

class ChartContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartItems: [],
            chartType: null
        }
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then((res)=>res.json())
            .then((chart) => {
                this.setState({chartItems: chart.feed.entry})
                this.setState({chartType: chart.feed.author.name.label})
            })
            .catch((error) => {console.error(error)})
    }

    render(){
    return( 
        <ChartList 
        chartItems={this.state.chartItems}
        chartType={this.state.chartType}
        ></ChartList>        
        )
    }

}

export default ChartContainer;



