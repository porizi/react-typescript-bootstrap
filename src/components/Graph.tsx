import * as React from 'react';
import {IGraph} from '../models';
import {Series} from './Series';

// Here we specify all of the component properties
interface Properties {
    graph: IGraph
    isLoading: boolean
    newProperty?: number
}

// Here we specify all of the component callbacks
interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
}

export class Graph extends React.Component<Props, State> {

    // Here we specify the default properties
    defaultProps = {
        isLoading: false
    };

    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        // [1] We can get type checking with nextProps and nextState parameters
        return true;
    }

    render() {
        
        var series = this.props.graph.series.map( (series, index) => {
            // [2] ...this.props gets type checked
            return <Series key={index} series={series} {...this.props} />
        });

        var graphStyle = {
            opacity: this.props.isLoading ? 0.5 : 1.0
        };

        // [3] You can quick-view the documentation of showGraphBorder
        if (this.props.graph.settings && this.props.graph.settings.showGraphBorder) {
            // do something to show the border around the graph
        }

        return <div className="graph" style={graphStyle}>{series}</div>
    }
}
