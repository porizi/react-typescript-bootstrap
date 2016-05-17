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

    // [1] We use defaultProps field instead of getDefaultProps()
    defaultProps = {
        isLoading: false
    };

    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        // [2] We can get type checking with nextProps and nextState parameters
        return true;
    }

    render() {
        
        var series = this.props.graph.series.map( (series, index) => {
            // [3] ...this.props gets type checked
            return <Series key={index} series={series} {...this.props} />
        });

        var graphStyle = {
            opacity: this.props.isLoading ? 0.5 : 1.0
        };

        // [4] Code completion helps with complicated data
        if (this.props.graph.settings && this.props.graph.settings.showGraphBorder) {
            // do something to show the border around the graph
        }

        return <div className="graph" style={graphStyle}>{series}</div>
    }
}
