import * as React from 'react';
import {IGraph} from '../models';
import {Series} from './Series';

interface Properties {
    graph: IGraph
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State extends React.Props<any> {
}

export class Graph extends React.Component<Props, State> {

    render() {
        
        var series = this.props.graph.series.map( series =>
            <Series series={series} />
        );
        
        return <div className="graph">{series}</div>
    }
}
