import { createGlobalState, useStorage } from "@vueuse/core";

export function useStorex() {
  const useState = createGlobalState(() =>
    useStorage("store", {
      data: {},
      user: {},
      usermeta: {},
      settings: { theme: "Dark" },
    })
  );
  const state = useState();
  return state;
}

// const user = useSupabaseUser()
// store.value.user = user.value || {}
// console.log("State:", store.value.user)
