//차 객체 이용
//차는 갈지 멈출지와 현재 점수를 보여주는 method만 보유
export class Car {
    
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    goOrStop = () => {
        MissionUtils.Random.pickNumberInRange(0, 9) >= 4 ? this.score++ : 0;
    }

    printRacing = () => {
        const resultHTML = "<p>" + `${this.name}:` + "-".repeat(this.score) + "</p>";
        return resultHTML;
    }

}