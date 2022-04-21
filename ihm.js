import { Todo } from "./classes/todo.js"

export class Ihm{
    constructor(){
        this.todos = []
        this.compteur = 0;
    }
    demarrer(){
        this.ajouterTodo(new Todo(this.compteur,"ranger mon casque","range ton casque dans la boite a casque"))
        this.ajouterTodo(new Todo(this.compteur,"faire des courses","acheter du pain, des pates, etc"))
        this.ajouterTodo(new Todo(this.compteur,"supprimer le todo","tu dois supprimer le todo faire des courses"))
        //affiche le tableau de todos

        //clique sur le bouton valider qui ajoute un todo
        //dans le tableau et l'affiche dans le tableau

        //clique sur le bouton recherche ca recherche tous les memes titre
        //dans le tableau de todos et ca les affiches

        //clique sur le bouton supprimer qui supprime le todo
        // du tableau et l'affiche

        //clique sur la case fait et change le bool du todo
    }
    ajouterTodo(todo){
        todos.push(todo);
        this.afficherTodo(todo)
        this.compteur++
    }
    changerStatutTodo(){

    }
    supprimerTodo(){

    }
    afficherTodo(){

    }
}   