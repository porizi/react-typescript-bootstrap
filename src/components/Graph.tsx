import * as React from 'react';
import {IGraph} from '../models';
import {Series} from './Series';

interface Properties {
    graph: IGraph
    isLoading: boolean
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
}

export class Graph extends React.Component<Props, State> {

    defaultProps = {
        isLoading: false
    };

    componentWillReceiveProps(nextProps: Props) {
    }

    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        return true;
    }

    render() {
        
        var series = this.props.graph.series.map( (series, index) =>
            <Series key={index} series={series} {...this.props} />
        );

        var graphStyle = {
            opacity: this.props.isLoading ? 0.5 : 1.0
        };
        
        return <div className="graph" style={graphStyle}>{series}</div>
    }
}
