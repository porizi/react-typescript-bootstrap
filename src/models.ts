
export interface IGraph {
    series: ISeries[]
    settings?: IGraphSettings
}

interface IGraphSettings {
    showGraphBorder?: boolean
    showLoadAnimation?: boolean
}

export interface ISeries {
    name: string
    color: string
    data: IDataPoint[]
}

export interface IDataPoint {
    x?: number
    y: number
    color?: string
}