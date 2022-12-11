
let progressCnt = 1;
let resultIndex = 1;        // 1 : 열정적인 배심원, 2 :배려하는 배심원 , 3: 논리적인 배심원, 4:공감하는 배심원 
let tProgressindex = 0;
let resultCaculateArray = [0,0,0,0];
var testType = "1";

window.onload = function()  {
    // 초기 size 세팅 
    var x = window.innerWidth;
    var y = window.innerHeight;

    var header    = document.getElementById("header");
    var content   = document.getElementById("content");

    if(x <= 500){
            header.style.width    = x +"px";
            content.style.width   = x +"px";
    } else{
        header.style.width = "500px";
        content.style.width = "500px";
    }
}

// 배심원 유형 테스트 시작버튼 실행시 
$("#test01_btn").on("click", function(){
    testType = "1";
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '80px' ); // 더미헤더 height 변경
    $('#header_img').attr({ src:  "/assets/images/test01_header.png" });                    
    $('#intro_content').css( 'display', 'none' ); 
    $('#question_content').css( 'display', '' ); 

     //questions 세팅 
     $('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
     $('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
     $('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
     $('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅
});

// 국민참여재판 튜토리얼 시작버튼 실행시 
$("#test02_btn").on("click", function(){
    testType = "2";
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '80px' ); // 더미헤더 height 변경
    $('#header_img').attr({ src:  "/assets/images/test02_header.png" });  
    $('#header_img').css( 'width', '100%' ); 
    $('#header_img_wrap').css( 'padding', '0' );     
    $('#intro_content').css( 'display', 'none' ); 
    $('#tutorial_content').css( 'display', '' ); 
    tProgressindex = 1;
});

// A 버튼 클릭시 
$("#answerABtn").on("click", function(){
    selectedArray[progressCnt] = questions[progressCnt].answerAScore; // 뒤로가기위해 저장
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
    selectedArray[progressCnt] = questions[progressCnt].answerBScore; // 뒤로가기위해 저장
    resultCaculateArray = arrayPlusArray( resultCaculateArray, questions[progressCnt].answerBScore); //결과값 계산 
    if(progressCnt < 5){
        progressCnt++;                      // 진행 Cnt ++
        setQuestionAndAnswer(progressCnt);  // 다음 버튼 img로 세팅 
    } else if (progressCnt == 5){
        setResult();
        progressCnt = 0;
    }
});


// 뒤로가기 기능
$("#back_img").on("click", function(){
    //[1] 배심원유형 테스트 
    if(testType == "1"){
        //첫문제일 경우 
        if(progressCnt == 1){
            location.reload(); //첫페이지로
            return;
        }  
        resultIndex--;
        progressCnt--;
        resultCaculateArray = arrayMinusArray( resultCaculateArray, selectedArray[progressCnt]);
         //결과값에서 빼주기
        if(resultIndex == 5){
            $('#back_img').css( 'display', 'none' );      
        }
        setQuestionAndAnswer(progressCnt);
    }

    //[1] 배심원유형 테스트 
    else if(testType =="2"){
        if(tProgressindex == 1){
            location.reload(); //첫페이지로
            return;
        }  

        tutorial_init();    // 각문제 초기화 

        $("#t"+tProgressindex).css( 'display', 'none');             
        $("#t"+parseInt(tProgressindex-1)).css( 'display', '');
        tProgressindex--;
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
    location.href = "result"+resultIndex+ ".html";
}

// 결과값 계산 함수
function arrayPlusArray(arr1, arr2) {
    let newArr = [0,0,0,0];
    for(let i in newArr) {
        newArr[i] =  arr1[i] + arr2[i];
    }
    return newArr;
}
// 뒤로가기 함수
function arrayMinusArray(arr1, arr2) {
    let newArr = [0,0,0,0];
    for(let i in newArr) {
        newArr[i] =  arr1[i] - arr2[i];
    }
    return newArr;
}
function searchMaxIndexArray(arr){5
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
var targetTop1;
var targetTop2;
var targetTop3;
var targetTop4;
var targetTop5;

document.addEventListener('click', function() {
     targetTop1  = document.getElementById('t1_trueBtn').getBoundingClientRect().top;
     targetTop2  = document.getElementById('t2_trueBtn').getBoundingClientRect().top;
     targetTop3  = document.getElementById('t3_btn3').getBoundingClientRect().top;
     targetTop4  = document.getElementById('t4_btn3').getBoundingClientRect().top;
     targetTop5  = document.getElementById('t5_trueBtn').getBoundingClientRect().top;
});

document.addEventListener('scroll', function() {
    var currentScrollValue = document.documentElement.scrollTop;

    targetTop1  = document.getElementById('t1_trueBtn').getBoundingClientRect().top + currentScrollValue;
    targetTop2  = document.getElementById('t2_trueBtn').getBoundingClientRect().top + currentScrollValue;
    targetTop3  = document.getElementById('t3_btn3').getBoundingClientRect().top + currentScrollValue;
    targetTop4  = document.getElementById('t4_btn3').getBoundingClientRect().top + currentScrollValue;
    targetTop5  = document.getElementById('t5_trueBtn').getBoundingClientRect().top + currentScrollValue;

    console.log("c targetTop3 " + targetTop3 + ", " + currentScrollValue);
});

// [1] 1번 문제 
$("#t1_trueBtn").on("click", function(){
    let targetWidth1 = $("#t1_trueBtn").width();
 
    $('#t1_correct').css( 'top', targetTop1 );      
    $('#t1_correct').css( 'width', targetWidth1 ); 
    $('#t1_correct').css( 'display', '');
    
    document.querySelector('#t1_falseBtn').disabled = true;
    setTimeout(function() {
        //본격적인 튜토리얼 시작 
        $('#t1_correct').css( 'display', 'none');
        $("#t1").css( 'display', 'none');             
        $("#t2").css( 'display', '');
        document.querySelector('#t1_falseBtn').disabled = false;
        tProgressindex = 2;
    }, 1000);
});

// [2] 2번 문제 
$("#t2_trueBtn").on("click", function(){
    let targetWidth2 = $("#t2_trueBtn").width();
    $('#t2_correct').css( 'top', targetTop2 );      
    $('#t2_correct').css( 'width', targetWidth2 ); 
    $('#t2_correct').css( 'display', '');

    document.querySelector('#t2_modal').style.display ='block';
});

$("#t2_modal_closeBtn").on("click", function(){
    document.querySelector('#t2_modal').style.display ='none';
    $('#t2_correct').css( 'display', 'none');
    $("#t2").css( 'display', 'none');        
    $("#t3").css( 'display', '');
    tProgressindex = 3;
});

// [3] 3번 문제 
$("#t3_btn3").on("click", function(){
    $("#t3_btn3").css( 'display', 'none');        
    $("#t3_btn3_correct").css( 'display', '');

    console.log("# targetTop3 " + targetTop3);
    $('#t3_correct').css( 'top', targetTop3 ); 
    $('#t3_correct').css( 'display', '');
    
    document.querySelector('#t3_modal').style.display ='block';
});

$("#t3_modal_closeBtn").on("click", function(){
    document.querySelector('#t3_modal').style.display ='none';
    $('#t3_correct').css( 'display', 'none');
    $("#t3").css( 'display', 'none');        
    $("#t4").css( 'display', '');
    
    tProgressindex = 4;
});

// [4] 4번 문제 
$("#t4_btn3").on("click", function(){
    $("#t4_btn3").css( 'display', 'none');        
    $("#t4_btn3_correct").css( 'display', '');

    let targetWidth = $("#t4_btn3_correct").width();
 
    $('#t4_correct').css( 'top', targetTop4 ); 
    $('#t4_correct').css( 'display', '');
    
    document.querySelector('#t4_modal').style.display ='block';
});
$("#t4_modal_closeBtn").on("click", function(){
    document.querySelector('#t4_modal').style.display ='none';
    $('#t4_correct').css( 'display', 'none');
    $("#t4").css( 'display', 'none');        
    $("#t5").css( 'display', '');
    tProgressindex = 5;
});

// [5] 5번 문제 
$("#t5_trueBtn").on("click", function(){
    let targetWidth5 = $("#t5_trueBtn").width();
 
    $('#t5_correct').css( 'top', targetTop5 );      
    $('#t5_correct').css( 'width', targetWidth5 ); 
    $('#t5_correct').css( 'display', '');
    
    document.querySelector('#t5_modal').style.display ='block';
});

$("#t5_modal_closeBtn").on("click", function(){
    //결과창으로 
    location.href = "result.html";
});

// 틀렸을 경우 모달 
function showIncorrectModal(index){
    document.querySelector('#incorrect_modal').style.display ='block';
    
    if(index == 1) {
        document.querySelector('#t1_trueBtn').disabled = true;
        document.querySelector('#t1_falseBtn').disabled = true;
        setTimeout(function() {
            document.querySelector('#incorrect_modal').style.display ='none';
            document.querySelector('#t1_trueBtn').disabled = false;
            document.querySelector('#t1_falseBtn').disabled = false;
        }, 1300);
    } 
    else if(index == 2){
        document.querySelector('#t2_trueBtn').disabled = true;
        document.querySelector('#t2_falseBtn').disabled = true;
        setTimeout(function() {
            document.querySelector('#incorrect_modal').style.display ='none';
            document.querySelector('#t2_trueBtn').disabled = false;
            document.querySelector('#t2_falseBtn').disabled = false;
        }, 1300);
    }
    else if(index == 3){
        document.querySelector('#t3_btn3').disabled = true;
        setTimeout(function() {
            document.querySelector('#incorrect_modal').style.display ='none';
            document.querySelector('#t3_btn3').disabled = false;
        }, 1300);
    }
    else if(index == 4){
        document.querySelector('#t4_btn3').disabled = true;
        setTimeout(function() {
            document.querySelector('#incorrect_modal').style.display ='none';
            document.querySelector('#t4_btn3').disabled = false;
        }, 1300);
    }
    else if(index == 5){
        document.querySelector('#t5_trueBtn').disabled = true;
        document.querySelector('#t5_falseBtn').disabled = true;
        setTimeout(function() {
            document.querySelector('#incorrect_modal').style.display ='none';
            document.querySelector('#t5_trueBtn').disabled = false;
            document.querySelector('#t5_falseBtn').disabled = false;
        }, 1300);
    }
} 

//뒤로가기시 튜토리얼 모두 초기화
function tutorial_init(){
    $("#t1_correct").css( 'display', 'none');
    $("#t2_correct").css( 'display', 'none');
    $("#t3_correct").css( 'display', 'none');
    $("#t4_correct").css( 'display', 'none');
    $("#t5_correct").css( 'display', 'none');

    $("#t3_btn3").css( 'display', '');        
    $("#t3_btn3_correct").css( 'display', 'none');

    $("#t4_btn3").css( 'display', '');        
    $("#t4_btn3_correct").css( 'display', 'none');

    $("#t2_modal").css( 'display', 'none');
    $("#t3_modal").css( 'display', 'none');
    $("#t4_modal").css( 'display', 'none');
    $("#t5_modal").css( 'display', 'none');
}


