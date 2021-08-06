
const randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNum);
let count = 0;
let result = document.querySelector('#result');
const inputNum = document.querySelector('#randomNum');

function numCal(inputNum) {
  if (inputNum.innerHTML < 1 || inputNum.innerHTML > 100){
    alert("1부터 100까지 숫자를 입력해주세요.");
    result.innerHTML = "";
  }
  else if (inputNum > randomNum) {
    alert("숫자 DOWN");
    count++;
    result.innerHTML = `${count}번 시도`;
  }
  else if (inputNum < randomNum) {
    alert("숫자 UP");
    count++;
    result.innerHTML = `${count}번 시도`;
  }
  else {
    alert("정답 입니다.");
    count++;
    result.innerHTML = `${count}번 시도`;
  }
}

document.addEventListener('click', () => numCal(inputNum) );


