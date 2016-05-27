import * as React from 'react';
import {ISeries} from "../models";
import {Column} from './Column';
import {findMax} from "../utils";

interface Properties {
    series: ISeries
    isLoading: boolean
}

interface Callbacks {
    onClick: (column: number) => void
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
}

export class Series extends React.Component<Props, State> {

    handleColumnClick(column: number) {
        // [1] Can we rename a property from here?
        this.props.onClick(column);
        // [2] Can we get auto-completion within strings?
        console.log(`Column ${this.props.series.color} was clicked`);
    }

    render() {

        var columnWidth = 100 / this.props.series.data.length;
        // [3] Can we rename a method from here?
        var maxY = findMax(
            this.props.series.data.map(dp => dp.y)
        );

        // [4] Compiler makes sure all the properties are wired correctly and with correct types
        var columns = this.props.series.data.map(
            (datapoint, index) =>
                <Column
                    key={index}
                    index={index}
                    width={columnWidth}
                    height={datapoint.y / maxY * 100}
                    color={datapoint.color || this.props.series.color}
                    {...this.props}
                    onClick={this.handleColumnClick.bind(this)}
                />
        );

        return <div className="series">{columns}</div>;
    }
}

