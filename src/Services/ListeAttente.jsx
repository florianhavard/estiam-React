import { Component } from "react";

export default class ListAttente extends Component {
    constructor(props) {
        super(props)
        this.listeAttente = []
        this.musiqueEnCour;
    }

    addMusiqueToList(musique) {
        this.listeAttente.push(musique)
        this.refrechMusique()
        console.log(this.musiqueEnCour)
        return this.listeAttente
    }

    addMusiqueInFirstToList(musique) {
        this.listeAttente.unshift(musique)
        this.refrechMusique()
        console.log(this.musiqueEnCour)
        return this.listeAttente
    }

    deleteMusiqueToList(musique) {
        console.log(musique)
        let i = this.listeAttente.indexOf(musique)
        console.log(i)
        if (i != -1){
            this.listeAttente.splice(i, 1)
            this.refrechMusique()
            console.log(this.musiqueEnCour)
            return this.listeAttente
        }
        else {
            console.error(`élément a supprimer est introuvable dans la liste d'attente (${musique})`)
        }  
    }

    clearList() {
        this.listeAttente = []
        this.refrechMusique()
        console.log(this.musiqueEnCour)
        return this.listeAttente
    }

    nextMusique(){
        this.listeAttente.splice(0,1)
        this.refrechMusique()
    }
    
    refrechMusique(){
        try{
            this.musiqueEnCour = this.listeAttente[0]
            console.log(this.musiqueEnCour)
            return this.musiqueEnCour
        }
        catch (error){
            console.error(error)
        }
    }
}

