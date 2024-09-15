<template>
 <div v-bind="$attrs"> <!-- Added v-bind="$attrs" here -->
  <ion-app>
   <ion-menu side="end" content-id="main-content" class="custom-menu">
    <ion-header>
     <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
     </ion-toolbar>
    </ion-header>
    <ion-content>
     <ion-list>
      <ion-item>
       {{ (useOnline() ? "Online" : "OffLine") }}
      </ion-item>
      <ion-item class="text-transform: capitalize" v-for="link in $router.options.routes"
       @click="$router.push(link.path)">
       {{ link.name }}
      </ion-item>
      <ion-item>
       <button @click="toggleDark()">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }} Theme</span>
       </button>
      </ion-item>
      <ion-item>
       {{ coords }}
      </ion-item>
     </ion-list>
    </ion-content>
   </ion-menu>

   <div class="ion-page" id="main-content">
    <ion-header>
     <ion-toolbar>
      <ion-title slot="start">{{ title }}</ion-title>
      <div>{{ hMiddle }}</div>
      <ion-buttons slot="end">
       <ion-menu-button></ion-menu-button>
      </ion-buttons>
     </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
     <main>
      <slot />
     </main>
    </ion-content>

    <IonFooter>
     <IonToolbar class="text-center">
      <div slot="start" class="px-3">{{ fStart }}</div>
      <div>{{ fMiddle }}</div>
      <div slot="end" class="px-3">{{ fEnd }}</div>
     </IonToolbar>
    </IonFooter>
   </div>
  </ion-app>
 </div>
</template>

<script setup lang="ts">
const store = useStorex()

const isDark = useDark()
const toggleDark = useToggle(isDark)
toggleDark(false) // Always Light Theme

const props = defineProps({
 title: { type: String, default: "" },
 hMiddle: { type: String, default: "" },
 fStart: { type: String, default: "" },
 fMiddle: { type: String, default: "" },
 fEnd: { type: String, default: "" },
});

import { useEventListener } from '@vueuse/core'
useEventListener(document, 'visibilitychange', (evt) => {
 console.log("Event Listener: ", evt)
})
useEventListener(document, 'keydown', (e) => {
 console.log("Key Pressed: ", e.key)
})

const { coords } = useGeolocation()

onMounted(() => {
 console.log("Layout mounted:");
});
</script>
