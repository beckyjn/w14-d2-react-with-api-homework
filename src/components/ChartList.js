import React, {Component} from 'react';

const ChartList = ({chartItems, chartType}) => {


    
    const chartItem = chartItems.map((chartItem, index) => {
        return <li key={index}>
        <img src={chartItem["im:image"][2].label} alt="cover art" />
        <h4>{chartItem["im:name"].label} -- {chartItem["im:artist"].label}</h4>
        <p>{chartItem.category.attributes.label}</p>
        </li>

        
    })

    return(
        <div>
            <h2>{chartType} chart</h2>
            <ol>{chartItem}</ol>
        </div>
    )
}

export default ChartList