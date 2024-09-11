<template>
  <div>
    <h1>{{ hello.message }}</h1>
    <p><span><small>{{ hello.timestamp }}</small></span></p>
  </div>
</template>

<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
// const appConfig = useAppConfig()
const { data: hello } = await useFetch('/api/hello')

console.log(hello.value)
</script>
