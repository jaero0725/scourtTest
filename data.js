const quesationsImageSrc = "/assets/images/questions/";
const questions = {
    1 : {
        title : "당신의 업무 스타일은 어떤가요?",
        questionImageSrc : quesationsImageSrc + "01/question01.png", 
        titleImageSrc : quesationsImageSrc + "01/question01_img.png",
        answerAImageSrc : quesationsImageSrc + "01/question01_A.png",
        answerBImageSrc : quesationsImageSrc + "01/question01_B.png",
    },
    2 : {
        title : "토론에 참여할때 당신은 어떤 편에 가까운가요??",
        questionImageSrc : quesationsImageSrc + "02/question02.png", 
        titleImageSrc : quesationsImageSrc + "02/question02_img.png",
        answerAImageSrc : quesationsImageSrc + "02/question02_A.png",
        answerBImageSrc : quesationsImageSrc + "02/question02_B.png",
    },
    3 : {
        title : "회의중, 나와의 완전히 다른 의견을 가진 사람이 있을 때 당신의 생각은?",
        questionImageSrc : quesationsImageSrc + "03/question03.png", 
        titleImageSrc : quesationsImageSrc + "03/question03_img.png",
        answerAImageSrc : quesationsImageSrc + "03/question03_A.png",
        answerBImageSrc : quesationsImageSrc + "03/question03_B.png",
    },
    4 : {
        title : "현실적으로 해결이 어려운 문제가 있을 때 당신의 생각은?",
        questionImageSrc : quesationsImageSrc + "04/question04.png", 
        titleImageSrc : quesationsImageSrc + "04/question04_img.png",
        answerAImageSrc : quesationsImageSrc + "04/question04_A.png",
        answerBImageSrc : quesationsImageSrc + "04/question04_B.png",
    },
    5 : {
        title : "상대방에게 필요한 조언을 해야 할 상황일 경우, 당신의 생각은ㅁ?",
        questionImageSrc : quesationsImageSrc + "05/question05.png", 
        titleImageSrc : quesationsImageSrc + "05/question05_img.png",
        answerAImageSrc : quesationsImageSrc + "05/question05_A.png",
        answerBImageSrc : quesationsImageSrc + "05/question05_B.png",
    },
};

const results = {
    1 : {
        title : "",
        titleImageSrc : "",
        contentTitle : "",
        content : "",
        relatedResults :{
            1 : {
                title : "",
                titleImageSrc : "",
                content : ""
            },
            2 : {
                title : "",
                titleImageSrc : "",
                content : ""
            },
            3 : {
                title : "",
                titleImageSrc : "",
                content : ""
            }
        }
    }
};

let progressCnt = 2;
//progressCnt++;
// 초기 세팅 
$('#question-step_question-title').attr({ src: questions[progressCnt].questionImageSrc });  // questionImageSrc 세팅
$('#question-step_question-image').attr({ src: questions[progressCnt].titleImageSrc });     // titleImageSrc 세팅 
$('#answerAImageSrc').attr({ src: questions[progressCnt].answerAImageSrc });                // answerAImageSrc 세팅
$('#answerBImageSrc').attr({ src: questions[progressCnt].answerBImageSrc });                // answerBImageSrc 세팅