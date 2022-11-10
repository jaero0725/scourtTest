const quesationsImageSrc = "/assets/images/questions/";
const resultsImageSrc = "/assets/images/results/";
const questions = {
    1 : {
        title : "당신의 업무 스타일은 어떤가요?",
        questionImageSrc : quesationsImageSrc + "01/question01.png", 
        titleImageSrc : quesationsImageSrc + "01/question01_img.png",
        answerAImageSrc : quesationsImageSrc + "01/question01_A.png",
        answerAScore : [1,3,-1,-3],
        answerBImageSrc : quesationsImageSrc + "01/question01_B.png",
        answerBScore : [-1,-3,1,3],
    },
    2 : {
        title : "토론에 참여할때 당신은 어떤 편에 가까운가요??",
        questionImageSrc : quesationsImageSrc + "02/question02.png", 
        titleImageSrc : quesationsImageSrc + "02/question02_img.png",
        answerAImageSrc : quesationsImageSrc + "02/question02_A.png",
        answerAScore : [3,1,-3,-1],
        answerBImageSrc : quesationsImageSrc + "02/question02_B.png",
        answerBScore : [-3,1,3,-1],
    },
    3 : {
        title : "회의중, 나와의 완전히 다른 의견을 가진 사람이 있을 때 당신의 생각은?",
        questionImageSrc : quesationsImageSrc + "03/question03.png", 
        titleImageSrc : quesationsImageSrc + "03/question03_img.png",
        answerAImageSrc : quesationsImageSrc + "03/question03_A.png",
        answerAScore : [-1,-3,3,1],
        answerBImageSrc : quesationsImageSrc + "03/question03_B.png",
        answerBScore : [1,3,-3,-1],
    },
    4 : {
        title : "현실적으로 해결이 어려운 문제가 있을 때 당신의 생각은?",
        questionImageSrc : quesationsImageSrc + "04/question04.png", 
        titleImageSrc : quesationsImageSrc + "04/question04_img.png",
        answerAImageSrc : quesationsImageSrc + "04/question04_A.png",
        answerAScore : [3,-1,-3,1],
        answerBImageSrc : quesationsImageSrc + "04/question04_B.png",
        answerBScore : [-1,1,3,-3],
    },
    5 : {
        title : "상대방에게 필요한 조언을 해야 할 상황일 경우, 당신의 생각은?",
        questionImageSrc : quesationsImageSrc + "05/question05.png", 
        titleImageSrc : quesationsImageSrc + "05/question05_img.png",
        answerAImageSrc : quesationsImageSrc + "05/question05_A.png",
        answerAScore : [1,3,-3,-3],
        answerBImageSrc : quesationsImageSrc + "05/question05_B.png",
        answerBScore : [-1,-3,3,1],
    },
};

const results = {
    1 : {
        title : "열정적인 배심원",
        titleSrc :  resultsImageSrc + "01/title01.png",
        titleImageSrc : resultsImageSrc + "01/title_img01.png",
        contentImageSrc : resultsImageSrc + "01/content_img01.png",
        relatedResults :{
            1 : {
                imageSrc : resultsImageSrc + "01/sub_img01.png",
            },
            2 : {
                imageSrc : resultsImageSrc + "01/sub_img02.png",
            },
            3 : {
                imageSrc : resultsImageSrc + "01/sub_img03.png",
            }
        }
    },
    2: {
        title : "배려하는 배심원",
        titleSrc :  resultsImageSrc + "02/title02.png",
        titleImageSrc : resultsImageSrc + "02/title_img02.png",
        contentImageSrc : resultsImageSrc + "02/content_img02.png",
        relatedResults :{
            1 : {
                imageSrc : resultsImageSrc + "02/sub_img01.png",
            },
            2 : {
                imageSrc : resultsImageSrc + "02/sub_img02.png",
            },
            3 : {
                imageSrc : resultsImageSrc + "02/sub_img03.png",
            }
        }
    },
    3 : {
        title : "논리적인 배심원",
        titleSrc :  resultsImageSrc + "03/title03.png",
        titleImageSrc : resultsImageSrc + "03/title_img03.png",
        contentImageSrc : resultsImageSrc + "03/content_img03.png",
        relatedResults :{
            1 : {
                imageSrc : resultsImageSrc + "03/sub_img01.png",
            },
            2 : {
                imageSrc : resultsImageSrc + "03/sub_img02.png",
            },
            3 : {
                imageSrc : resultsImageSrc + "03/sub_img03.png",
            }
        }
    },
    4 : {
        title : "공감하는 배심원",
        titleSrc :  resultsImageSrc + "04/title04.png",
        titleImageSrc : resultsImageSrc + "04/title_img04.png",
        contentSrc : resultsImageSrc + "04/content_img04.png",
        relatedResults :{
            1 : {
                imageSrc : resultsImageSrc + "04/sub_img01.png",
            },
            2 : {
                imageSrc : resultsImageSrc + "04/sub_img02.png",
            },
            3 : {
                imageSrc : resultsImageSrc + "04/sub_img03.png",
            }
        }
    }
};

