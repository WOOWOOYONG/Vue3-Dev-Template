<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
</script>
<template>
  <div class="flex min-h-screen flex-col items-center">
    <AppHeader />
    <main class="container flex-grow justify-center">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
