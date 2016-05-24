import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Graph} from './components/Graph';
import {generateRandomSeries} from "./sampleData";
import {IGraph} from "./models";

ReactDOM.render(
    <button onClick={handleRenderGraph}>
        Generate
    </button>,
    document.getElementsByClassName('button-container')[0]
);

function handleRenderGraph() {
    var graph = {
        series: [generateRandomSeries(50)],
        settings: {
            showGraphBorder: false,
            showLoadAnimation: false
        }
    };

    ReactDOM.render(
        <Graph
            graph={graph}
            isLoading={false}
        />,
        document.getElementsByClassName('graph-container')[0]
    );
    // Wait .. isn't this Javascript?
    // [1] try setting showGraphBorder to 1
    // [2] try removing the series field
}

handleRenderGraph();