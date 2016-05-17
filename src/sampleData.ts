import {IGraph, ISeries} from "./models";

var series1: ISeries = {
    name: "Series 1",
    color: '#067AB6',
    data: [
        {y: 10},
        {y: 20},
        {y: 30},
        {y: 40},
        {y: 50}
    ]
};

export var graph1: IGraph = {
    series: [series1]
};

function randNum(max: number) {
    return Math.round( Math.random() * max );
}

function genRandomRBGColor() : string {
    return `rgb(${randNum(150)}, ${randNum(150)}, ${randNum(150)})`;
}

export function generateRandomSeries(length: number) : ISeries {

    var data = [];
    for(var i = 0; i < length; i++) {
        data.push( {y: randNum(200)} );
    }

    return {
        name: 'Random series',
        color: genRandomRBGColor(),
        data: data
    }
}