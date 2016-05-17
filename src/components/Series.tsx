import * as React from 'react';
import {ISeries} from "../models";
import {Column} from './Column';

interface Properties {
    series: ISeries
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State extends React.Props<any> {
}

export class Series extends React.Component<Props, State> {

    findMax(data: number[]) : number {
        if (data.length > 0) {
            return data.reduce( (a, b) => a > b ? a : b, data[0]);
        }
        return null;
    }

    render() {

        var columnWidth = 100 / this.props.series.data.length;
        var maxY = this.findMax(this.props.series.data.map(dp => dp.y));

        var columns = this.props.series.data.map( (datapoint, index) =>
            <Column
                index={index}
                width={columnWidth}
                height={datapoint.y / maxY * 100}
                color={datapoint.color || this.props.series.color}
            />
        );

        return <div className="series">{columns}</div>;
    }
}

