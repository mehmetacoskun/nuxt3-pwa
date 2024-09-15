<template>
  <div>
    <ion-app>
      <ion-menu side="end" content-id="main-content" class="custom-menu">
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ title || 'Menu' }}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item href="/">Home</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title slot="start">{{ title || '' }}</ion-title>
            <div>{{ hMiddle || '' }}</div>
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
            <div slot="start" class="px-3">{{ fStart || '' }}</div>
            <div>{{ fMiddle || '' }}</div>
            <div slot="end" class="px-3">{{ fEnd || '' }}</div>
          </IonToolbar>
        </IonFooter>
      </div>
    </ion-app>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  hMiddle: String,
  fStart: String,
  fMiddle: String,
  fEnd: String,
});

onMounted(() => {
  console.log("Mounted");
});
</script>
