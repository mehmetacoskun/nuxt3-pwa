<template>
 <NuxtLayout title="People">
  <div class="p-3">
   <UTable :rows="state" :loading="isReady" />
  </div>
 </NuxtLayout>
</template>

<script setup lang="ts">
const { state, isReady } = useAsyncState(
 fetch('https://jsonplaceholder.typicode.com/users').then(t => t.json()),
 {},
); whenever(isReady, () => console.log(state.value))

</script>
