<template>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{{ name }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonMenu side="start" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon :icon="homeOutline" slot="start"></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon :icon="personOutline" slot="start"></IonIcon>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon :icon="settingsOutline" slot="start"></IonIcon>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon :icon="logOutOutline" slot="start"></IonIcon>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
</template>

<script setup lang="ts">
import {
  homeOutline,
  personOutline,
  settingsOutline,
  logOutOutline,
} from "ionicons/icons";

defineProps({
  name: String,
});
</script>
