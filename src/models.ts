
export interface IGraph {
    series: ISeries[]
    settings?: IGraphSettings
}

interface IGraphSettings {
    /**
     * If set to true, it will show a border around the graph
     */
    showGraphBorder?: boolean
    /**
     * If set to true, it'll show a loading animation when the
     * data change
     */
    showLoadAnimation?: boolean
}

export interface ISeries {
    name: string
    color: string
    data: IDataPoint[]
}

export interface IDataPoint {
    y: number       // [2] Can I rename this to "value"?
    color?: string  // [3] Can I see where is this field used?
}