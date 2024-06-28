<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import useChart from '@/plugins/echarts'

const chartRef = ref<HTMLDivElement>()
let chartInstance: ReturnType<typeof useChart>

onMounted(() => {
  nextTick(() => {
    chartInstance = useChart(chartRef.value as HTMLDivElement)
    const { setOption } = chartInstance
    setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    })
    window.addEventListener('resize', () => {
      if (!chartInstance) return
      chartInstance.resize()
    })
  })
})

onUnmounted(() => {
  const { resize } = chartInstance
  window.removeEventListener('resize', () => {
    resize()
  })
})
</script>

<template>
  <div class="flex h-full w-full justify-center" ref="containerRef">
    <div class="h-[400px] w-[400px]" ref="chartRef"></div>
  </div>
</template>

<style scoped></style>
