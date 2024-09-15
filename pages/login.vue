<script setup lang="ts">
const store = useStorex()
const { auth } = useSupabaseClient();
const { state, isReady } = useAsyncState(
 auth.getUser(),{},
); whenever(isReady, () => {
      store.value.user = state.value.data.user
      // console.log("Get User:",state.value.data.user, store)
     })

// const logIn = useCookie<{
//  id: string,
//  email: string,
// } | null>("logIn", {
//  default: () => ({
//   id: "",
//   email: "",
//  }),
// });

const credentials = ref({
 email: "met.joshqun@gmail.com",
 password: "Arise786*",
});

const error = ref("");

const doSignIn = async () => {
 error.value = "";

 try {
  const { data, error: authError } = await auth.signInWithPassword({
   ...credentials.value,
  });

  // useCookie("logIn", { maxAge: 31536000 }).value = JSON.stringify(data.user);
  store.value.user = data.user
  console.log(store.value)
  // window.location.href = "/";
  if (authError) throw authError;
 } catch (err) {
  error.value = (err as Error).message;
 } finally {
  console.log("Done.")
 }
};

const doUserLogout = async () => {
  await auth.signOut();
  store.value.user = {}
  console.log("Logged Out");
  // window.location.reload()
};

</script>

<template>
 <NuxtLayout title="Menu">
  <div class="p-3">
   <UButton @click="doSignIn">Sign In</UButton>
   <UButton @click="doUserLogout">Sign Out</UButton>
   <UCard>Error: {{ error || '' }}</UCard>
   <UCard>
    {{ store.user }}
   </UCard>
  </div>
 </NuxtLayout>
</template>
