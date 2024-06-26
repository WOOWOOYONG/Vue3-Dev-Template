<script setup lang="ts"></script>
<template>
  <div>
    <h1 class="page-title">This is admin page.</h1>
  </div>
</template>

<style scoped></style>
<route lang="yaml">
name: admin
meta:
  requiresAuth: true
</route>
