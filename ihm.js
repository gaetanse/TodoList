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

        const buttonAjouter = document.getElementById('valider')
        buttonAjouter.addEventListener('click', (e)=>{
            e.preventDefault()
            this.ajouterTodo(new Todo(this.compteur,document.getElementById('inputTitre').value,document.getElementById('contenu').value))
        })

        this.rechercher()

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
    rechercher(){
        const search = document.getElementById('search')
        const btnSearch = document.getElementById('btnsearch')
        btnSearch.addEventListener('click', (e)=>{
            if(search.value===""){
                this.afficherTodo(this.todos);
            }
            else{
                const arrays = []
                for(let i=0;i<this.todos.length;++i){
                    const { titre } = this.todos[i].method()
                    if(titre===search.value){
                        console.log(titre+ " / "+search.value)
                        arrays.push(this.todos[i])
                    }
                }
                console.log(arrays)
                this.afficherTodo(arrays);
            }
        })
    }
    supprimerTodo(index){
        console.log(index)
        this.todos.splice(index, 1);
        console.log(this.todos)
        this.afficherTodo(this.todos)
    }
    afficherTodo(todos){
        const tableauHtml = document.getElementsByTagName('table')[0]
        tableauHtml.innerHTML = 
        `<tr class="table-dark">
           <th scope="col">Id</th>
           <th scope="col">Titre</th>
           <th scope="col">Contenu</th>
           <th scope="col">Statut</th>
           <th scope="col">Action</th>
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
                    <button type="button" class="btn btn-danger" id="buttonSupprimer${id}">Supprimer</button>
                </td> 
            </tr>`
            const ButtonSupprimer = document.getElementById('buttonSupprimer'+id)
            ButtonSupprimer.addEventListener('click', (e)=>{
                e.preventDefault()
                this.supprimerTodo(id)
            })
        }
    }
}   