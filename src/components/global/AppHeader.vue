<script setup lang="ts"></script>
<template>
  <header class="flex justify-between">
    <div>This is Header</div>
    <nav>
      <ul class="flex items-center gap-3">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
