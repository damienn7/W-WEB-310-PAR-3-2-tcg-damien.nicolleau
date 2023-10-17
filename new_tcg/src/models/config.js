import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import CemetaryModel from './cemetary';

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
    "cemetary": {
        "class": CemetaryModel,
        "param": '{"cards" : [{"face":"card-3"}, {"face":"card-4"}]}'
    }
}