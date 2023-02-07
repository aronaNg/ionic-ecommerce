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
          <ion-button router-link="/produit">Aller dans notre boutique</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonButton, IonToolbar } from '@ionic/vue';
import { defineComponent} from 'vue';
export default defineComponent({

  name:"HomePage",
  // data:()=>{
  //   test:"test"
  // },
  components: {IonContent, IonPage,IonHeader,IonButton,IonToolbar },
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
