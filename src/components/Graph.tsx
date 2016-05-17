import * as React from 'react';
import {IGraph} from '../models';
import {Series} from './Series';

// Here we specify all of the component properties
interface Properties {
    graph: IGraph
    isLoading: boolean
}

// Here we specify all of the component callbacks
interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
}

export class Graph extends React.Component<Props, State> {

    // We use defaultProps field instead of getDefaultProps()
    defaultProps = {
        isLoading: false
    };

    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        // We can get type checking with nextProps and nextState parameters
        return true;
    }

    render() {
        
        var series = this.props.graph.series.map( (series, index) =>
            // ...this.props gets also type checked
            <Series key={index} series={series} {...this.props} />
        );

        var graphStyle = {
            opacity: this.props.isLoading ? 0.5 : 1.0
        };
        
        return <div className="graph" style={graphStyle}>{series}</div>
    }
}
