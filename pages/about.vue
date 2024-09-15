<template>
 <div>
  <h1>{{ hello }}</h1>
  <ul>
   <li class="text-transform: capitalize" v-for="link in $router.options.routes" :href="link.path">
    <UButton :to="link.path">{{ link.name }}</UButton>
   </li>
  </ul>
 </div>
</template>

<script setup lang="ts">
const hello = "About Page"
</script>
