<template>

<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bienvenue dans notre boutique</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-img src="https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Image de la boutique"></ion-img>
          <h1>Vous pouvez consulter nos produits</h1>
          <ion-button router-link="/produit">Retourner aux produits</ion-button>
          <ion-grid>
      <ion-row>
        <ion-col>test</ion-col>
        <ion-col>test</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>test</ion-col>
        <ion-col>test</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>test</ion-col>
        <ion-col>test</ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

  
<script lang="ts">
import { IonCol, IonGrid, IonRow,IonContent, IonHeader, IonPage,IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
  
export default defineComponent({
  name:"CategoriePage",
  components: { IonCol, IonGrid, IonRow,IonContent, IonHeader, IonPage,IonToolbar, IonButton },
});
</script>
  
<style scoped>
    ion-col {
      background-color: #135d54;
      border: solid 1px #fff;
      color: #fff;
      text-align: center;
}
</style>