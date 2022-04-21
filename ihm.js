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

        //clique sur le bouton valider qui ajoute un todo
        //dans le tableau et l'affiche dans le tableau

        //clique sur le bouton recherche ca recherche tous les memes titre
        //dans le tableau de todos et ca les affiches

        //clique sur le bouton supprimer qui supprime le todo
        // du tableau et l'affiche

        //clique sur la case fait et change le bool du todo
    }
    ajouterTodo(todo){
        this.todos.push(todo);
        this.afficherTodo(this.todos)
        this.compteur++
    }
    changerStatutTodo(){

    }
    supprimerTodo(){

    }
    afficherTodo(todos){
        const tableauHtml = document.getElementsByTagName('table')[0]
        tableauHtml.innerHTML = 
        `<tr class="table-dark">
           <th scope="col">Id</th>
           <th scope="col">Titre</th>
           <th scope="col">Contenu</th>
           <th scope="col">Statut</th>
        </tr>`
        for(let i=0;i<todos.length;++i){
            const { id, titre, contenu, statut } = todos[i].method()
            tableauHtml.innerHTML += 
            `<tr>
                <td>${id}</td> 
                <td>${titre}</td>
                <td>${contenu}</td> 
                <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                    <label class="form-check-label" for="flexSwitchCheckChecked">fait</label>
                </div>
                </td>
                <td>
                    <button type="button" class="btn btn-danger" id="buttonSupprimer">Supprimer</button>
                </td> 
            </tr>`
        }
    }
}   