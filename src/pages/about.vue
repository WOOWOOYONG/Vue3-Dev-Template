<template>
  <main>
    <h1 class="page-title text-purple-500">Hello this is about page.</h1>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<route lang="yaml">
name: about
meta:
  requiresAuth: false
</route>
