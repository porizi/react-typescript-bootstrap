import * as React from 'react';

interface Properties {
    index: number
    height: number
    width: number
    color: string
    isLoading: boolean
}

interface Callbacks {
}

interface Props extends React.Props<any>, Properties, Callbacks {}

interface State {
    isSelected: Boolean
}

export class Column extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleColumnClick(e : React.SyntheticEvent) {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    render() {

        var columnStyle = {
            left: this.props.index * this.props.width + '%',
            width: this.props.width + '%',
            height: this.props.height + '%',
            backgroundColor: this.props.color
        };

        return <div
            className={"column " + (this.state.isSelected ? 'column-selected': '') }
            style={columnStyle}
            onClick={e => this.handleColumnClick(e)}>
        </div>
    }
}

