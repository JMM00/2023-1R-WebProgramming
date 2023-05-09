//함수
function twice(a) {
  return a*2;
}
//함수
const TT = (a) => a*2

//TT(2) = 4
//twice(2) = 4


const gpa = [2.7,3.2,4.4,4.2,3.8];
gpa.map(twice);
gpa.map(TT);
gpa.map((a) => a*2);
//위의 함수 실행 시 gpa의 값은 변경되지 않음

gpa.map((score, idx) => score*2 + idx);
gpa.map((score, idx, total) => score*2 + total.length);
gpa.map((score) => {
  return score * 2;
})
gpa.map((score, idx, total) => {
  console.log(score, idx, total);
  return score*2;
});


//filter함수
gpa.filter((score) => {
  return score > 3;
});
gpa.filter((score) => score>3);