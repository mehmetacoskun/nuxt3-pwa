<template>
  <ion-icon
    id="open-modal"
    :icon="personOutline"
    class="cursor-pointer"
  ></ion-icon>
  <ion-modal ref="modal" trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal()">
            <ion-icon :icon="closeOutline" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit.prevent="doSignIn" class="px-6">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="credentials.email"
            type="email"
            required
            autocomplete="email"
            class="w-full text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md bg-white"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            v-model="credentials.password"
            type="password"
            required
            autocomplete="current-password"
            class="w-full text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md bg-white"
          />
        </div>
        <div v-if="error" class="text-red-600 mb-4">{{ error }}</div>
        <button
          type="submit"
          :disabled="isLoading"
          class="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-4 rounded mt-3 w-full font-bold disabled:opacity-50"
        >
          {{ isLoading ? "Signing in..." : "Sign In" }}
        </button>
      </form>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts" setup>
import { personOutline, closeOutline } from "ionicons/icons";

const modal = ref();
const closeModal = () => modal.value.$el.dismiss();

// const router = useRouter();
const credentials = ref({
  email: "",
  password: "",
});
const error = ref("");
const isLoading = ref(false);

const doSignIn = async () => {
  const { auth } = useSupabaseClient();
  if (isLoading.value) return;
  error.value = "";
  isLoading.value = true;

  try {
    const { data, error: authError } = await auth.signInWithPassword({
      ...credentials.value,
    });
    if (authError) throw authError;
    useCookie("logIn", { maxAge: 31536000 }).value = JSON.stringify(data.user);
  } catch (err) {
    error.value = (err as Error).message;
    console.log("Error:", error);
  } finally {
    closeModal();
    isLoading.value = false;
    console.log("Logged In");
  }
};
</script>
