<script setup lang="ts">
const sum = ref(11)
</script>

<template>
  <div id="app" p="y-2 x-4">
    <header>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <div>{{ sum }}</div>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style scoped></style>
