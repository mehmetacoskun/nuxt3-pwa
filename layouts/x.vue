<template>
  <div>
    <ion-app>
      <ion-menu side="end" content-id="main-content" class="custom-menu">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item href="/menu">Home</ion-item>
            <ion-item href="/menu/blogs">Blog</ion-item>
            <ion-item href="/menu/device">Device Info</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ title }}</ion-title>
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
          <IonToolbar>
            <div slot="start" class="px-3">Joshqun</div>
            <div slot="end" class="px-3">
              <div v-if="!cook">
                <LoginModal />
              </div>
              <div v-else>
                <ion-icon
                  @click="doUserLogout"
                  :icon="settingsOutline"
                ></ion-icon>
              </div>
            </div>
          </IonToolbar>
        </IonFooter>
      </div>
    </ion-app>
  </div>
</template>

<script setup lang="ts">
import { settingsOutline } from "ionicons/icons";
import { useCookie } from "nuxt/app";
const cook = useCookie("logIn");

const props = defineProps({
  title: String,
});

const doUserLogout = async () => {
  const { auth } = useSupabaseClient();
  await auth.signOut();
  useCookie("logIn").value = null;
  cook.value = null;
  console.log("Logged Out");
  window.location.reload()
};

onMounted(() => {
  // menuController.enable(true);
  // console.log("Layouts Cookies: ", cook.value);
});
</script>
