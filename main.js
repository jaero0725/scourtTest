
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
    // console.log(sessionStorage.getItem("check"));
    // console.log(sessionStorage.getItem("result"));
    // if(sessionStorage.getItem("check")){
    //     console.log("테스트 한사람");
    //     // 테스트 한사람이면, 결과페이지로 이동

    //     $('#intro_content').css( 'display', 'none' ); 
    //     $('#question_content').css( 'display', 'none' ); 
    //     $('#result_content').css( 'display', '' ); 

    //     resultIndex = sessionStorage.getItem("result");
    //     $('#result_titleSrc').attr({ src: results[resultIndex].titleSrc });                     // titleSrc 세팅
    //     $('#result_titleImageSrc').attr({ src: results[resultIndex].titleImageSrc });                // titleImageSrc 세팅
    //     $('#result_contentImageSrc').attr({ src: results[resultIndex].contentImageSrc });
    //     $('#relatedResult0' + resultIndex).css( 'display', 'none' );

    //     progressCnt = 0;

    //     // 테스트 다시하기를 누를 경우에만 check됨. 
    // }

    //questions 세팅 
    $('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
    $('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
    $('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
    $('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅

    Kakao.init('06dd1f2514881e17de053dde9e87cc67');
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

// 배심원 유형 테스트 시작버튼 실행시 
$("#test01_btn").on("click", function(){
    //set UI
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '100px' ); // 더미헤더 height 변경
    
    //배심원유형 테스트 일 경우 헤더 
    $('#header_img').attr({ src:  "/assets/images/test01_header.png" });                     // titleSrc 세팅
    
    $('#intro_content').css( 'display', 'none' ); 
    $('#question_content').css( 'display', '' ); 
});

// 국민참여재판 튜토리얼 시작버튼 실행시 
$("#test02_btn").on("click", function(){
    //set UI
    $('#header').css( 'display', '' );  // header 생성
    $(".dummy-header").css( 'height', '80px' ); // 더미헤더 height 변경

    $('#header_img').attr({ src:  "/assets/images/test02_header.png" });    
    $('#intro_content').css( 'display', 'none' ); 
    $('#tutorial_content').css( 'display', '' ); 
});

// A 버튼 클릭시 
$("#answerABtn").on("click", function(){
    //결과값 계산 
    resultCaculateArray = arrayPlusArray( resultCaculateArray, questions[progressCnt].answerAScore);

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
    //score 검사해서 세팅 
    resultIndex = searchMaxIndexArray(resultCaculateArray);
    
    console.log(resultIndex)
    $('#question_content').css( 'display', 'none' ); 
    $('#result_content').css( 'display', '' ); 
    
    $('#result_titleSrc').attr({ src: results[resultIndex].titleSrc });                     // titleSrc 세팅
    $('#result_titleImageSrc').attr({ src: results[resultIndex].titleImageSrc });                // titleImageSrc 세팅
    $('#result_contentImageSrc').attr({ src: results[resultIndex].contentImageSrc });
    $('#relatedResult0' + resultIndex).css( 'display', 'none' );      

    // 다시 들어갈시 테스트한사람인지 check 한다. 
    //sessionStorage.setItem("check", "true"); 
    //sessionStorage.setItem("result", resultIndex); 
}


/*
    공유하기 기능 함수
*/
const url = encodeURI(window.location.href);
// kakao 공유하기 - 카카오톡 공유 API
$("#kakaoBtn").on("click", function(){
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나는 어떤 배심원일까? 당신이 어떤 배심원인지 알아보세요.',
          imageUrl:
            kakaoTitleImg[resultIndex].src,
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '확인해보러가기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
      
});

//트위터 공유하기
$("#tweetBtn").on("click", function(){
    const text = '나는 어떤 배심원일까?';
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url);
});

//facebook 공유하기
$("#facebookBtn").on("click", function(){
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
});

//link 공유하기 
$("#linkBtn").on("click", function(){
    navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사되었습니다.");
});

/*
    결과값 계산 함수
*/
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
    const targetHeight = $("#t1_trueBtn").height();
    const targetWidth = $("#t1_trueBtn").width();
    const targetTop  = target.getBoundingClientRect().top;
    const targetLeft = target.getBoundingClientRect().left;
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