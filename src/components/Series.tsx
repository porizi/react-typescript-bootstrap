import * as React from 'react';
import {ISeries} from "../models";
import {Column} from './Column';
import {findMax} from "../utils";

interface Properties {
    series: ISeries
    isLoading: boolean
    newProperty: number
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
}

export class Series extends React.Component<Props, State> {

    render() {

        var columnWidth = 100 / this.props.series.data.length;
        var maxY = findMax(this.props.series.data.map(dp => dp.y));

        // [1] Compiler makes sure all the properties are wired correctly and with correct types
        var columns = this.props.series.data.map( (datapoint, index) =>
            <Column
                key={index}
                index={index}
                width={columnWidth}
                height={datapoint.y / maxY * 100}
                color={datapoint.color || this.props.series.color}
                {...this.props}
            />
        );

        return <div className="series">{columns}</div>;
    }
}

