//homework.js
// 1. 계림샘 2.구글링 3.GPT사용(다양하게)

//while문- 반복횟수가 정해져있지 않은 경우
//for문 - 반복횟수가 정해져 있는 경우


// a= 10;
// a= a+''+20;

function print(){
    let div= document.getElementById("result");

    div.innerHTML = makeRandom();
}
function makeRandom(){
    let 내용='';
    for(let i= 0; i<5; i++){ // 5줄 표현하기 위한 반복분
        var line=' ';
        for(let j =0; j<4; j++){ // 한줄에 4개씩 숫자 표현하기 위한 반복문
            let randomNumber = Math.floor(Math.random() * 50) + 1; //1-50까지의 랜덤값
            line = line +' '+ randomNumber;
          }
          내용 = 내용 + line +'<br>';
    }
    return 내용;
}

window.onload=function(){
}
