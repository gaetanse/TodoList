export class Todo {
    constructor(id, titre, contenu, statut=false) {
        this.id = id
        this.titre = titre
        this.contenu = contenu
        this.statut = statut
    }
    changerStatutTodo(){
        this.statut = !this.statut
    }
    method(){
        return {
            id: this.id,
            titre: this.titre,
            contenu: this.contenu,
            statut: this.statut
        }
    }
}