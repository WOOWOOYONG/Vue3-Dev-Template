<script setup lang="ts"></script>
<template>
  <header class="flex h-10 w-full items-center justify-between bg-slate-100 px-40">
    <div><RouterLink to="/">Home</RouterLink></div>
    <nav>
      <ul class="flex items-center gap-3">
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/user">User</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
