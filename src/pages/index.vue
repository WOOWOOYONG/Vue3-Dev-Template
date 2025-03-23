<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core'

const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
console.log('log 這個應該會被移除')
</script>

<template>
  <section>
    <h1 class="page-title text-teal-700">Hello this is home page.</h1>
    <div class="flex flex-col items-center gap-8">
      <h3>VueUse Example</h3>
      <p>Mouse: {{ x }} x {{ y }}</p>
      <div>
        Counter: {{ count }}
        <a style="margin-right: 10px" @click="inc()">+</a>
        <a @click="dec()">-</a>
      </div>
    </div>
  </section>
</template>
