export default class RacingGameController { 
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.initialize();
    }

    initialize() { 
        this.view.bindCarNameSubmit(this.handleCarNameSubmit.bind(this));
        this.view.bindCountSubmit(this.handleCountSubmit.bind(this));
    }

    handleCarNameSubmit(event) {
        event.preventDefault();
        const carNames = this.view.getCarNameInput();

        if(!this.model.validateCarNames(carNames)) {
            this.view.showAlert("잘못된 차 이름을 입력하셨습니다!");
            return;
        }

        this.model.createCars(carNames.split(","));
    }

    handleCountSubmit(event) {
        event.preventDefault();

        this.model.reset();
        this.view.clearResult();

        const count = this.view.getCountInput();

        if(!this.model.validateCount(count)) {
            this.view.showAlert("정수만 입력하세요!");
            return;
        }

        this.model.setCount(count);

        this.model.play(this.view.updateResult.bind(this.view));

        this.view.updateWinner(this.model.winner());
    }

}