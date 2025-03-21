export default class RacingGameView {
    constructor() {
        this.carNameInput = document.querySelector("#car-names-input");
        this.carNameSubmit = document.querySelector("#car-names-submit");
        this.countInput = document.querySelector("#racing-count-input");
        this.countSubmit = document.querySelector("#racing-count-submit");
        this.resultOutput = document.querySelector("#racing-result");
        this.raceWinner = document.querySelector("#racing-winners");
        this.racingResult = document.querySelectorAll("h4")[1];
    }

    getCarNameInput() {
        return this.carNameInput.value;
    }

    getCountInput() {
        return this.countInput.value;
    }

    updateResult(message) {
        this.resultOutput.insertAdjacentHTML("beforebegin", message);
    }

    updateWinner(message) {
        this.raceWinner.textContent = message;
    }
    //h4 태그 사이에 현재 racing 결과를 출력 중이므로
    //쓰여진 text, tag를 삭제해 주기 위한 함수 ( 버튼이 다시 눌렸을 때를 대비 )
    clearResult() {
        let node = this.racingResult.nextSibling;
        while (node && node !== this.resultOutput) {
            const next = node.nextSibling;
            node.remove();
            node = next;
        }
    }

    bindCarNameSubmit(handler) {
        this.carNameSubmit.addEventListener("click", handler);
    }

    bindCountSubmit(handler) {
        this.countSubmit.addEventListener("click", handler);
    }

    showAlert(message) {
        alert(message);
    }
}