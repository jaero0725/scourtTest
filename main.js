
var progressCnt = 1;
var currentCnt;         // 뒤로가기 위함.
var resultIndex = 1;
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

// widow size 변경 시 
window.onresize = function() {
    const width = window.innerWidth;
    const height = window.innerHeight;	
    
    //window 사이즈가 500px 보다 작다면, 
    if(width <= 500){
        header.style.width    = width +"px";
        backgrond.style.width = width +"px";
        content.style.width   = width +"px";
    }
}


// 시작버튼 실행시 
$("#startBtn").on("click", function(){
    //set UI
    $('#intro_content').css( 'display', 'none' ); 
    $('#question_content').css( 'display', '' ); 
});

// A 버튼 클릭시 
$("#answerABtn").on("click", function(){
    progressCnt++;
    if(progressCnt < 5){
        setQuestionAndAnswer(progressCnt);
        calScore();
    } else if (progressCnt == 5){
        setResult();
        progressCnt = 0;
    }
});

// B 버튼 클릭시 
$("#answerBBtn").on("click", function(){
    progressCnt++;
    if(progressCnt < 5){
        setQuestionAndAnswer(progressCnt);
    } else if (progressCnt == 5){
        setResult();
        progressCnt = 0;
    }
});

// 총점계산
function calScore(){

}

// QNA UI 세팅
function setQuestionAndAnswer(progressCnt){
    $('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
    $('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
    $('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
    $('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅
}

//결과 세팅 
function setResult(){
    $('#question_content').css( 'display', 'none' ); 
    $('#result_content').css( 'display', '' ); 

    //score 검사해서 세팅 
    $('#result_titleSrc').attr({ src: results[resultIndex].titleSrc });                     // titleSrc 세팅
    $('#result_titleImageSrc').attr({ src: results[resultIndex].titleImageSrc });                // titleImageSrc 세팅
    $('#result_contentImageSrc').attr({ src: results[resultIndex].contentImageSrc });                // contentTitle 세팅
    $('#relatedResult01').attr({ src: results[resultIndex].relatedResults[1].imageSrc });   //
    $('#relatedResult02').attr({ src: results[resultIndex].relatedResults[2].imageSrc });
    $('#relatedResult03').attr({ src: results[resultIndex].relatedResults[3].imageSrc });

}