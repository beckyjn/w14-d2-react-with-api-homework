import React, {Component} from 'react';

const ChartList = ({chartItems, chartType}) => {


    
    const chartItem = chartItems.map((chartItem) => {
        return <p>song!</p>
    })

    return(
        <div>
            <h2>{chartType} chart</h2>
            {chartItem}
        </div>
    )
}

export default ChartList