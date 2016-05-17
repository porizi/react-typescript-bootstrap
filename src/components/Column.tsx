import * as React from 'react';

interface Properties {
    index: number
    height: number
    width: number
    color: string
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State extends React.Props<any> {
}

export class Column extends React.Component<Props, State> {

    render() {

        var columnStyle = {
            left: this.props.index * this.props.width + '%',
            width: this.props.width + '%',
            height: this.props.height + '%',
            backgroundColor: this.props.color
        };

        return <div className="column" style={columnStyle}></div>
    }
}

