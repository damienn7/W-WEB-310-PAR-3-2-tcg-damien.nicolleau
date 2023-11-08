
export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        // si le paquet est vide, on arrête l'action de mélanger les cartes
        if (this.getCardsCount() === 0) {
            return false;
        }
        // sinon, on créer une copie de l'array des cartes à mélanger 
        var cards = [...this.cards];
        // on itère sur le nombre de cartes dans le paquet
        for (let index = 0; index < cards.length; index++) {
            // on échange ici deux cartes du paquet à chaque itération 
            // avec l'aide d'un index random compris entre 0 
            // et le nombre de cartes 
            const element = cards[index];
            const random_index = Math.floor(Math.random() * cards.length);
            let element_to_shuffle = cards[random_index];

            cards[random_index] = element;
            cards.splice(index, 1,element_to_shuffle);
        }
        // on initialise nouveau paquet fraichement mélangé
        this.cards = cards;

        return true;
    }

    insertAt(card, position = null) {
        // ajoute une carte à la fin du paquet 
        // ou à la position donnée en paramètre
        // !position -> position === null
        if (!position) {
            this.cards.push(card);
        } else {
            this.cards.splice(position,0,card);
        }
    }

    draw () {
        // retourne la première carte du paquet
        if (this.cards.length === 0) {
            return false;
        } else {
            // console.log(this.cards.splice(0,1));
            return this.cards.splice(0,1);
        }
    }

    getCardsCount () {
        // on retourne le nombre de cartes dans le paquet
        return this.cards.length;
    }
}