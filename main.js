
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

    Kakao.init('06dd1f2514881e17de053dde9e87cc67');
    console.log(Kakao.isInitialized());
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
    //결과값 계산 
    resultCaculateArray = arrayPlusArray( resultCaculateArray, questions[progressCnt].answerAScore);

    if(progressCnt < 5){
        progressCnt++;                      //진행 Cnt ++
        setQuestionAndAnswer(progressCnt);  //다음 버튼 img로 세팅 
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
        progressCnt++;                      //진행 Cnt ++
        setQuestionAndAnswer(progressCnt);  //다음 버튼 img로 세팅 
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
    
    // console.log(resultIndex)
    $('#question_content').css( 'display', 'none' ); 
    $('#result_content').css( 'display', '' ); 
    
    $('#result_titleSrc').attr({ src: results[resultIndex].titleSrc });                     // titleSrc 세팅
    $('#result_titleImageSrc').attr({ src: results[resultIndex].titleImageSrc });                // titleImageSrc 세팅
    $('#result_contentImageSrc').attr({ src: results[resultIndex].contentImageSrc });
    $('#relatedResult0' + resultIndex).css( 'display', 'none' );                 
}


/*
    공유하기 기능 함수
*/

//kakao 공유하기 - 카카오톡 공유 API
$("#kakaoBtn").on("click", function(){
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나는 어떤 배심원일까? 당신이 어떤 배심원인지 알아보세요.',
          description: '',
          imageUrl:
            'https://user-images.githubusercontent.com/55049159/201449154-3b91d106-9a07-488b-b163-95e5eed842bb.png',
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

const url = encodeURI(window.location.href);

//instagram 공유하기
$("#instaBtn").on("click", function(){
    
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
    //alert("결과" + arr1 + " +" + arr2 + ": " + newArr);
    return newArr;
}

function searchMaxIndexArray(arr){5
    console.log(arr);
    const max = Math.max(...arr);
    const index = arr.indexOf(max) + 1;

    return index;
}


