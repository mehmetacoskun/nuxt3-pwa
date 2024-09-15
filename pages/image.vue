<template>
 <NuxtLayout title="Image" fMiddle="Hello World">
  <div class="p-3">
   <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" indicators>
    <img :src="item" draggable="true" class="w-full">
   </UCarousel>
  </div>
 </NuxtLayout>
</template>

<script setup lang="ts">
const items = [
 'https://picsum.photos/600/800?random=1',
 'https://picsum.photos/600/800?random=2',
 'https://picsum.photos/600/800?random=3',
 'https://picsum.photos/600/800?random=4',
 'https://picsum.photos/600/800?random=5',
 'https://picsum.photos/600/800?random=6'
]
</script>
