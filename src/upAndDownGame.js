
const randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNum);
let count = 0;

const enterCheck = function(e) {
  if(e.keyCode == 13){
      numCal();
      return false;
  }
}

document.querySelector('#randomNum').onkeypress = enterCheck;

function numCal() {
  let inputNum = document.querySelector('#randomNum').value;
  let result = document.querySelector('#result')
  
  if (inputNum < 1 || inputNum > 100){
    alert("1부터 100까지 숫자를 입력해주세요.");
  }
  else if (inputNum > randomNum) {
    alert("숫자 DOWN");
    count++;
    result.value = `${count}번 시도`;
  }
  else if (inputNum < randomNum) {
    alert("숫자 UP");
    count++;
    result.value = `${count}번 시도`;
  }
  else {
    alert("정답 입니다.");
    count++;
    result.value = `${count}번 시도 후에 정답을 맞혔습니다.`;
  }
    document.querySelector('#randomNum').value = "";

}




