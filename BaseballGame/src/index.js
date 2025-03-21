export default function BaseballGame() {
    //재시작 버튼 활성화
    this.visualRestartButton = function(flag) {
        if(!flag){
            document.getElementById("game-restart-button").style.display = 'none';
        }else {
            document.getElementById("game-restart-button").style.display = 'block';
        }
    };
    this.visualRestartButton(0);
    //결과 출력 함수
    //정답을 맞출 경우 재시작 버튼이 보이도록 설정
    this.result = function(strike, ball) { 
        if(strike === 3){
            this.visualRestartButton(1);
            return "<h4>🎉정답을 맞히셨습니다!🎉</h4>게임을 새로 시작하시겠습니까?<br><br>"
        }
        if(strike === 0 && ball === 0) return "낫싱";
        return ball===0 ? `${strike}스트라이크` : strike===0 ? `${ball}볼` : `${ball}볼 ${strike}스트라이크`
    }
    //야구 게임 시작 함수
    this.play = function(computerInputNumbers, userInputNumbers) { 

        let strike = 0;
        let ball = 0;

        [...userInputNumbers].forEach((val, index) => {
            if(computerInputNumbers[index] === Number(val)) { 
                strike++;
            }else if(computerInputNumbers.includes(Number(val))) {
                ball++;
            }
        });
        return this.result(strike, ball);
    };
    //랜덤 숫자 생성 함수
    //컴퓨터가 가질 숫자를 생성함
    this.generateNumbers = function() { 
        const randomNumbers = [];

        while(randomNumbers.length < 3) { 
            const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);

            if(!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }
        return randomNumbers;
    };

    this.randomInputNumbers = this.generateNumbers();

    this.validateNumbers = function(userInputNumbers) { 
        return /^[1-9]{3}$/.test(userInputNumbers) && new Set(userInputNumbers).size === 3;
    };

    this.restart = function() { 
        this.visualRestartButton(0);
        this.randomInputNumbers = this.generateNumbers();
        document.getElementById("user-input").value = "";
        document.getElementById("result").innerText = "";
    };

   this.initEventListeners = function() { 
        document.getElementById("submit").addEventListener("click", (event) => { 
            event.preventDefault();
            const userInputNumbers =document.getElementById("user-input").value;
            if(!this.validateNumbers(userInputNumbers)) {
                alert("숫자는 3자리 중복 없이 입력해주세요!");
                return;
            }
            const result = this.play(this.randomInputNumbers, userInputNumbers);
            document.getElementById("result").innerHTML = result;
        });

        document.getElementById("game-restart-button").addEventListener("click", (event) => {
            event.preventDefault();
            this.restart();
        });
    };
}
const baseballGame = new BaseballGame();

baseballGame.initEventListeners();