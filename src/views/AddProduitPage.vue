<template>
    <ion-page>
    <header-component page-title="Ajouter un produit"></header-component>
      <ion-content :fullscreen="true">
        <form>
            <ion-list>
                <ion-item>
                    <ion-label>Nom du produit</ion-label>
                    <ion-input type="text" placeholder="nom de la ville" v-model="todo.title"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>description du produit</ion-label>
                    <ion-textarea col="5" v-model="todo.description"></ion-textarea>
                </ion-item>
                <ion-item>
                    <ion-label>Image du produit</ion-label>
                    <ion-input type="url" v-model="todo.img"></ion-input>
                </ion-item>    
            </ion-list>

            <ion-button expand="full" type="submit">Sauvegarder</ion-button>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent,IonPage,IonList,IonLabel,IonInput,IonTextarea,IonItem,IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  
    name:"ToDoAddPage",
    methods:{
      submiForm(){
        console.log(this.$data.todo);

      }
    },
    data(){
      return{
        todo:[{
          title:"",
          img:"",
          description:""     
        },
      ]
      }
  },
    components: {IonContent,IonPage,IonList,IonLabel,IonInput,IonTextarea,IonItem,IonButton },
  });
  </script>
  
  <style scoped>
  
  </style>
  