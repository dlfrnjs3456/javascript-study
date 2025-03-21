import view from './view/RacingGameView.js'
import model from './model/RacingGameModel.js'
import controller from './control/RacingGameController.js'

const CarView = new view();
const CarModel = new model();

const Race = new controller(CarModel, CarView);