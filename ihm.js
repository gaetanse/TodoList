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
            const p = new Promise((resolve) => {
                const rechercheText = document.getElementById('rechercheText')
                rechercheText.innerText = `ajouter promesse en cours`
                setTimeout(() => {
                    this.ajouterTodo(new Todo(this.compteur,document.getElementById('inputTitre').value,document.getElementById('contenu').value))
                    resolve({data : "ajouter promesse fini"})
                },1000)
            })
            p.then((response) => {
                const rechercheText = document.getElementById('rechercheText')
                rechercheText.innerText = response.data
            })
        })

        this.rechercher()

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

            const p = new Promise((resolve) => {
                const rechercheText = document.getElementById('rechercheText')
                rechercheText.innerText = `rechercher promesse en cours`
                setTimeout(() => {
                    
                    if(search.value===""){
                        this.afficherTodo(this.todos);
                    }
                    else{
                        const arrays = []
                        for(let i=0;i<this.todos.length;++i){
                            const { titre } = this.todos[i].method()
                            if(titre===search.value){
                                arrays.push(this.todos[i])
                            }
                        }
                        this.afficherTodo(arrays);
                    }

                    resolve({data : "rechercher promesse fini"})
                },1000)
            })

            p.then((response) => {
                const rechercheText = document.getElementById('rechercheText')
                rechercheText.innerText = response.data
            })
        })
    }

    boutonsSupprimer(todos){
        for(let i=0;i<todos.length;++i){
            const { id } = todos[i].method()
            console.log(id)
            const ButtonSupprimer = document.getElementById('buttonSupprimer'+id)
            ButtonSupprimer.addEventListener('click', (e)=>{
                e.preventDefault()
                const p = new Promise((resolve) => {
                    const rechercheText = document.getElementById('rechercheText')
                    rechercheText.innerText = `supprimer promesse en cours`
                    setTimeout(() => {
                this.supprimerTodo(id)
                resolve({data : "supprimer promesse fini"})
                    },1000)
                })

                p.then((response) => {
                    const rechercheText = document.getElementById('rechercheText')
                    rechercheText.innerText = response.data
                })
            })
        }
    }

    supprimerTodo(id2){
        for(let i=0;i<this.todos.length;++i){
            const { id } = this.todos[i].method()
            if(id===id2){
                this.todos.splice(i, 1);
            }
        }
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
            const { id, titre, contenu } = todos[i].method()
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
        }
        this.boutonsSupprimer(todos)
    }
}   