import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Graph} from './components/Graph';
import {generateRandomSeries} from "./sampleData";
import {IGraph} from "./models";

ReactDOM.render(
    <button onClick={handleRenderGraph}>Generate</button>,
    document.getElementsByClassName('button-container')[0]
);

function handleRenderGraph() {

    var graph: IGraph = {
        series: [generateRandomSeries(50)]
    };

    ReactDOM.render(
        <Graph graph={graph}/>,
        document.getElementsByClassName('graph-container')[0]
    );

}

handleRenderGraph();