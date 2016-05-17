import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Graph} from './components/Graph';
import {generateRandomSeries} from "./sampleData";

ReactDOM.render(
    <button onClick={handleRenderGraph}>Generate</button>,
    document.getElementsByClassName('button-container')[0]
);

var graph = {series: [generateRandomSeries(50)]};

function handleRenderGraph() {

    ReactDOM.render(
        <Graph graph={graph} isLoading={true}/>,
        document.getElementsByClassName('graph-container')[0]
    );

    setTimeout(function() {
        graph = {
            series: [generateRandomSeries(50)]
        };

        ReactDOM.render(
            <Graph graph={graph} isLoading={false}/>,
            document.getElementsByClassName('graph-container')[0]
        );
    }, 500);

}

handleRenderGraph();