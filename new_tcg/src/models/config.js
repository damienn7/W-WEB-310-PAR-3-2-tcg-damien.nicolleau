import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';

export default {
    "game": {
        "class": GameModel,
        "param": '{"up":"","down":""}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards": [{"face":"card-1"}, {"face":"card-2"},{"face":"card-1"}, {"face":"card-2"},{"face":"card-1"}, {"face":"card-2"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{"type":"human","cards": [{"face":"card-1"}, {"face":"card-2"},{"face":"card-1"}, {"face":"card-2"},{"face":"card-1"}, {"face":"card-2"}, {"face":"card-2"}]}'
    }
}