
const randomNum = Math.floor(Math.random()*100)+1;
// 1~100까지 숫자 중 랜덤하게 선택되어 변수에 저장
console.log(randomNum);
let count = 0;
// 초기값 0으로 설정(총 시도 횟수)

function keyCheck(e) {
  if(e.keyCode == 13 || e.which == 13) {
    // 엔터를 누를 때 numCal()함수 실행
    numCal(); 
    return false;
    // keypress일 때 브라우저가 할 기본 동작 취소
  }
}

function numCal() {
  const inputNum = document.querySelector('#randomNum').value;
  const result = document.querySelector('#result');
  // 입력된 숫자와 랜덤으로 뽑힌 숫자를 비교
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
    // 결과 값이 나오면 입력된 값은 빈 문자열로 설정

}




