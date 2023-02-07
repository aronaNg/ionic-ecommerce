<template>
    <ion-page>
      <header-component page-title="Liste des todos"></header-component>
  
      <ion-content :fullscreen="true">
        <ion-list>
          <ion-item>
            <ion-thumbnail slot="start">
                <ion-img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image du produit"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h1>Produit 1</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet? Fugit voluptate eligendi blanditiis deleniti rem voluptatum beatae laborum officiis. Ipsa tenetur voluptatem tempore odio possimus quaerat?</p>
              <p><strong>120€</strong></p>
            </ion-label>
            <ion-button router-link="/todo/1">voir le produit</ion-button>            
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
                <ion-img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image du produit"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h1>Produit 2</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet? Fugit voluptate eligendi blanditiis deleniti rem voluptatum beatae laborum officiis. Ipsa tenetur voluptatem tempore odio possimus quaerat?</p>
              <p><strong>100€</strong></p>
            </ion-label>
            <ion-button router-link="/todo/2">voir le produit</ion-button>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
                <ion-img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Image du produit"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h1>Produit 3</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet? Fugit voluptate eligendi blanditiis deleniti rem voluptatum beatae laborum officiis. Ipsa tenetur voluptatem tempore odio possimus quaerat?</p>
              <p><strong>210€</strong></p>
            </ion-label>
            <ion-button router-link="/todo/3">voir le produit</ion-button>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
                <ion-img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image du produit"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h1>Produit 4</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet? Fugit voluptate eligendi blanditiis deleniti rem voluptatum beatae laborum officiis. Ipsa tenetur voluptatem tempore odio possimus quaerat?</p>
              <p><strong>140€</strong></p>
            </ion-label>
            <ion-button router-link="/todo/4">voir le produit</ion-button>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
                <ion-img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image du produit"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h1>Produit 5</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet? Fugit voluptate eligendi blanditiis deleniti rem voluptatum beatae laborum officiis. Ipsa tenetur voluptatem tempore odio possimus quaerat?</p>
              <p><strong>300€</strong></p>
            </ion-label>
            <ion-button>voir le produit</ion-button>
          </ion-item>
        </ion-list>
        <!-- <ion-list>
        <ion-item v-for="todo in todos" v-bind:key="todo.id">
          <ion-thumbnail slot="start">
            <ion-img :src="todo.img" alt="Image de la ville"></ion-img>
          </ion-thumbnail>
          <ion-label>
            <h1>{{todo.title}}</h1>
            <p>{{ todo.description }}</p>
          </ion-label>
          <ion-button :router-link="'/todo/${todo.id}'">Voir le produit</ion-button>
          </ion-item>
      </ion-list> -->
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonPage, IonList, IonItem,IonLabel,IonButton, IonThumbnail } from '@ionic/vue';
  import { defineComponent, computed } from 'vue';
  import { store} from "../store/index"

  export default defineComponent({
  
    name:"ProduitPage",
    setup(props){
    //const store = useStore();
    //methode 1
    //const todos = store
    // recuperation des getters
    const todos = computed(()=>{
      return store.getters.getAlltodos;
    })
    return {todos}


  },
  data(){
    return{}},
    components: {IonContent, IonPage, IonItem, IonLabel, IonList,IonButton,IonThumbnail },
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
  