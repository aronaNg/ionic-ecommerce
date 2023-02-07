import { InjectionKey } from "vue";
import {createStore, GetterTree, Store, useStore as baseUseStore} from "vuex"

export type Todo = {id:number, title:string;description?:string, img?:string}
export type State = {todos: Todo[]}

const state: State = {
    todos:[
        {
            id:0,
            title:"Produit 1",
            img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"     
          },
          {
            id:1,
            title:"Produit 2",
            img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          },
          {
            id:2,
            title:"Produit 3",
            img:"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          },
          {
            id:3,
            title:"Produit 4",
            img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          }
    ]
}

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => state.todos,
    getTodoById: (state) => (id:number) => state.todos.find(todo=>todo.id===id)

}

export const store = createStore<State>({state, getters});
export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(){
    return baseUseStore(key)
}