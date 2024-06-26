<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const memberId = computed(() => route.params.id)
</script>
<template>
  <div>Member ID: {{ memberId }}</div>
</template>

<style scoped></style>
