<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const memberId = computed(() => route.params.id)
</script>
<template>
  <div>
    <h1 class="page-title">Member ID: {{ memberId }}</h1>
  </div>
</template>

<style scoped></style>
