<script setup lang="ts">
import { settingsOutline } from "ionicons/icons";
useHead({ title: "Home Page" })
// definePageMeta({
//     middleware: 'auth'
//   })

const items = [
 'https://picsum.photos/600/800?random=1',
 'https://picsum.photos/600/800?random=2',
 'https://picsum.photos/600/800?random=3',
 'https://picsum.photos/600/800?random=4',
 'https://picsum.photos/600/800?random=5',
 'https://picsum.photos/600/800?random=6'
]
const { x, y } = useMouse()

const store = useStorex()
// console.log(store.value)

const logIn = useCookie<{
 id: string,
 email: string,
} | null>("logIn", {
 default: () => ({
  id: "",
  email: "",
 }),
});

const doUserLogout = async () => {
 const { auth } = useSupabaseClient();
 await auth.signOut();
 useCookie("logIn").value = null;
 logIn.value = null;
 console.log("Logged Out");
 // router.replace("/login");
};

</script>

<template>
 <NuxtLayout title="Index">
  <div class="p-1">
   <UCard>
    <template #header>
     <div class="text-xl font-bold">
      Hello World
      <span class="text-red-300">{{ x }}, {{ y }}</span>
     </div>
    </template>

 <UCarousel 
  v-slot="{ item }" 
  :items="items" 
  :ui="{ item: 'basis-full' }" 
  class="rounded-lg overflow-hidden"
  indicators
  >
  <img :src="item" class="w-full" draggable="true">
 </UCarousel>


    <template #footer>
     <div>Joshqun Ltd</div>
    </template>
   </UCard>

  </div>
 </NuxtLayout>
</template>


<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->
