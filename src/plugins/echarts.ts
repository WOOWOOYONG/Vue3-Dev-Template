import * as echarts from 'echarts/core'
import type { ComposeOption } from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'

import type {
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
  DatasetComponentOption
} from 'echarts/components'

import { LineChart, BarChart } from 'echarts/charts'
import type { LineSeriesOption, BarSeriesOption } from 'echarts/charts'

type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
>

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition
])

const useChart = (element: HTMLDivElement) => {
  const myChart = echarts.init(element)
  const setOption = (optionData: any) => {
    const option: ECOption = {
      tooltip: {},
      yAxis: {},
      ...optionData
    }
    return myChart.setOption(option)
  }

  const resize = () => myChart.resize()
  return { setOption, resize }
}

export default useChart
