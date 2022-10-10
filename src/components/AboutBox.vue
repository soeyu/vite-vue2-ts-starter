<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">about:{{ msg }}</h1>
  </div>
</template>

<style scoped></style>
