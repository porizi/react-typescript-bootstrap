import * as React from 'react';

interface Properties {
    index: number       // Column index
    height: number      // Height of the column (0..100)
    width: number       // Width of column (0..100)
    color: string       // Color of this column
    isLoading: boolean  // Is the graph loading or not
}

interface Callbacks {
    onClick: (index: number) => void
}

interface Props extends React.Props<any>, Properties, Callbacks {}

// This is where we define the app state
interface State {
    isSelected: Boolean
}

export class Column extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        // Here we set the initial state
        this.state = {
            isSelected: false
        }
    }

    handleColumnClick(e : React.SyntheticEvent) {
        if (!this.props.isLoading) {
            this.setState({
                isSelected: !this.state.isSelected
            });
            this.props.onClick(this.props.index);
        } else {
            // [1] Get code completion on framework fields &
            // methods
            // Note: this is just for demo .. you don't need this
            e.stopPropagation();
        }
    }

    render() {

        var columnStyle = {
            left: this.props.index * this.props.width + '%',
            width: this.props.width + '%',
            height: this.props.height + '%',
            backgroundColor: this.props.color
        };
        
        return <div
            className={"column " + (this.state.isSelected ? 'column-selected': '')}
            style={columnStyle}
            onClick={e => this.handleColumnClick(e)}>
        </div>
    }
}

