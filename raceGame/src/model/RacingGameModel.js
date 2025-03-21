import {Car} from './Car.js'

//차의 정보를 저장하는 model 객체
export default class RacingGameModel {
    #Cars;
    #count;

    setCount(count) {
        this.count = Number(count);
    }

    validateCarNames(carName) {
        return /^\w{1,5}(,\w{1,5})*$/.test(carName);
    }

    validateCount(count) {
        return Number.isInteger(Number(count));
    }
    //차 이름을 저장할 때 중복을 제거하여 생성
    createCars(carNameInput) {
        this.Cars = [];
        const uniqueCarName = new Set(carNameInput);

        [...uniqueCarName].forEach((val, index) => {
            this.Cars.push(new Car(val));
        });
    }
    //버튼이 눌러질때마다 새로운 게임이 실행되도록 기존 score 초기화
    reset() { 
        [...this.Cars].forEach((val, index) => {
            val.score = 0;
        });
    }
    //현재 score의 max 값을 찾아내어 max score를 보유 중인 car를 모두 출력
    winner() {
        const winMaxVal = Math.max(...[...this.Cars].map(car => car.score));

        const winner = [];

        [...this.Cars].forEach((val, index) => {
            if (val.score === winMaxVal) {
                winner.push(val.name);
            }
        })
        return winner.join(",");
    }
    //레이싱 게임
    play(callback) {
        for (let i = 0; i < this.count; i++) {
            let raceResult="";
            for (let j = 0; j < this.Cars.length; j++) {
               this.Cars[j].goOrStop();
               raceResult += this.Cars[j].printRacing();
            }
            raceResult += "<br>"
            callback(raceResult);
        }
    }
}