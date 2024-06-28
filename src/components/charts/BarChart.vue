<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import useChart from '@/plugins/echarts'

// const parentHeight = ref(0)
// const containerRef = ref<HTMLDivElement>()
const chartRef = ref<HTMLDivElement>()
// const computedParentHeight = computed({
//   get() {
//     return parentHeight.value
//   },
//   set(val: number) {
//     parentHeight.value = val
//     ;(chartRef.value as any).style.height = `${val}px`
//   }
// })

let chartInstance: ReturnType<typeof useChart>

onMounted(() => {
  nextTick(() => {
    // parentHeight.value = (containerRef.value as HTMLDivElement).clientHeight
    // computedParentHeight.value = parentHeight.value
    chartInstance = useChart(chartRef.value as HTMLDivElement)
    const { setOption, resize } = chartInstance
    setOption({
      color: ['#D1BB9E'],
      xAxis: {
        data: ['襯衫', '羊毛衫', '雪紡衫', '褲子', '高跟鞋', '襪子']
      },
      series: [
        {
          name: '銷量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
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
