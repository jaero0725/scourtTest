
let progressCnt = 1;
let currentCnt;         // 뒤로가기 위함.
let resultIndex = 1;        // 1 : 열정적인 배심원, 2 :배려하는 배심원 , 3: 논리적인 배심원, 4:공감하는 배심원 
let resultCaculateArray = [0,0,0,0];

window.onload = function()  {
    // 초기 size 세팅 
    var x = window.innerWidth;
    var y = window.innerHeight;

    var header    = document.getElementById("header");
    var backgrond = document.getElementById("backgrond");
    var content   = document.getElementById("content");

    if(x <= 500){
            header.style.width    = x +"px";
            backgrond.style.width = x +"px";
            content.style.width   = x +"px";
    } else{
        header.style.width = "500px";
        backgrond.style.width = "500px";
        content.style.width = "500px";
    }
    //questions 세팅 
    $('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
    $('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
    $('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
    $('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅
}

// 배심원 유형 테스트 시작버튼 실행시 
$("#test01_btn").on("click", function(){
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '80px' ); // 더미헤더 height 변경
    $('#header_img').attr({ src:  "/assets/images/test01_header.png" });                    
    $('#intro_content').css( 'display', 'none' ); 
    $('#question_content').css( 'display', '' ); 
});

// 국민참여재판 튜토리얼 시작버튼 실행시 
$("#test02_btn").on("click", function(){
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '80px' ); // 더미헤더 height 변경
    $('#header_img').attr({ src:  "/assets/images/test02_header.png" });    
    $('#intro_content').css( 'display', 'none' ); 
    $('#tutorial_content').css( 'display', '' ); 
});

// A 버튼 클릭시 
$("#answerABtn").on("click", function(){
    resultCaculateArray = arrayPlusArray( resultCaculateArray, questions[progressCnt].answerAScore); //결과값 계산 
    if(progressCnt < 5){
        progressCnt++;                      // 진행 Cnt ++
        setQuestionAndAnswer(progressCnt);  // 다음 버튼 img로 세팅 
    } else if (progressCnt == 5){
        setResult();
        progressCnt = 0;
    }
});

// B 버튼 클릭시 
$("#answerBBtn").on("click", function(){
    //결과값 계산 
    resultCaculateArray = arrayPlusArray( resultCaculateArray, questions[progressCnt].answerBScore);

    if(progressCnt < 5){
        progressCnt++;                      // 진행 Cnt ++
        setQuestionAndAnswer(progressCnt);  // 다음 버튼 img로 세팅 
    } else if (progressCnt == 5){
        setResult();
        progressCnt = 0;
    }
});

// QNA UI 세팅
function setQuestionAndAnswer(progressCnt){
    $('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
    $('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
    $('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
    $('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅
}

//결과 세팅 
function setResult(){
    resultIndex = searchMaxIndexArray(resultCaculateArray);//score 검사해서 세팅 
    
    sessionStorage.setItem("test", "01");           //배심원테스트
    sessionStorage.setItem("result", resultIndex);  //결과값저장

    location.href = "result"+resultIndex+ ".html";
}

// 결과값 계산 함수
function arrayPlusArray(arr1, arr2) {
    let newArr = [0,0,0,0];
    for(let i in newArr) {
        newArr[i] =  arr1[i] + arr2[i];
    }
    console.log("결과 arr1 [" + arr1 + "] + arr2 [" + arr2 + "] = " + newArr);
    return newArr;
}

function searchMaxIndexArray(arr){5
    console.log(arr);
    const max = Math.max(...arr);
    const index = arr.indexOf(max) + 1;
    return index;
}

/*
################################
국민참여재판 절차안내 튜토리얼 함수
- 문제별로 함수 만듦
################################
*/
$("#t1_trueBtn").on("click", function(){
    //정답 button위치 찾기 - true 
    const target = document.getElementById('t1_trueBtn'); // 요소의 id 값이 target이라 가정
   //const targetHeight = $("#t1_trueBtn").height();
    const targetWidth = $("#t1_trueBtn").width();
    const targetTop  = target.getBoundingClientRect().top;
   // const targetLeft = target.getBoundingClientRect().left;
    $('#correct').css( 'top', targetTop );      
    $('#correct').css( 'width', targetWidth ); 
    $('#correct').css( 'display', ''); 
});

$("#t1_falseBtn").on("click", function(){
    //먹통?
    //alert("2");
});


// 추가될 기능  
//새로고침 -> 첫페이지로 이동 
$("#resetBtn").on("click", function(){
    location.reload();
});
// 뒤로가기 기능
$("#backBtn").on("click", function(){
    console.log("init : " + resultIndex + " , " + progressCnt);
    //첫문제일 경우 
    if(progressCnt == 1){
        location.reload(); //첫페이지로
        return;
    }  
    //첫문제가 아닐 경우 
    console.log("before : " + resultIndex + " , " + progressCnt);
    resultIndex--;
    progressCnt--;
    console.log("after : " + resultIndex + " , " + progressCnt);

    if(resultIndex == 5){
        $('#backBtn').css( 'display', 'none' );      
    }
    setQuestionAndAnswer(progressCnt);
});