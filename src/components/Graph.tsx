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
    onClick?: (series: number, column: number) => void
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
        // [1] We can get type checking with nextProps and
        // nextState parameters
        return true;
    }

    handleClick(series: number) {
        return (column: number) => {
            // [2] We can auto-complete inside strings
            alert(`Column ${column} of series ${series} was clicked`);
            this.props.onClick(series, column);
        }
    }

    render() {
        
        var series = this.props.graph.series.map(
            (series, index) => {
                // [3] ...this.props gets type checked
                return <Series
                    key={index}
                    series={series}
                    {...this.props}
                    onClick={this.handleClick(index)}
                />
        });

        var graphStyle = {
            opacity: this.props.isLoading ? 0.5 : 1.0
        };

        // [4] You can quick-view the documentation of showGraphBorder
        if (this.props.graph.settings &&
            this.props.graph.settings.showGraphBorder) {
            // do something to show the border around the graph
        }

        return <div className="graph" style={graphStyle}>{series}</div>
    }
}
