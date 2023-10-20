import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    },
    "hand": {
        "class" : HandModel,
        "param": '{"limit" : "10","cards":[]}'
    }
}