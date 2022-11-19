/*
    공유하기 기능 함수
*/
const url = encodeURI(window.location.href);


window.onload = function()  {
   Kakao.init('06dd1f2514881e17de053dde9e87cc67');
   var test = sessionStorage.getItem("test");
   var resultIndex = sessionStorage.getItem("result"); 

   /*
    //공유하기 할시 상대방 결과 나오도록 한다.
    if(sessionStorage.getItem("test") == null || sessionStorage.getItem("test") == undefined){
        history.back();
        return; 
    }
    //배심원 유형 TEST
    if(test == "01"){
        $(".dummy-header").css( 'height', '100px' ); // 더미헤더 height 변경
        $('#header_img').attr({ src:  "/assets/images/test01_header.png" });                    // titleSrc 세팅
        $('#result_content').css( 'display', '' ); 
        $('#result_titleSrc').attr({ src: results[resultIndex].titleSrc });                     // titleSrc 세팅
        $('#result_titleImageSrc').attr({ src: results[resultIndex].titleImageSrc });           // titleImageSrc 세팅
        $('#result_contentImageSrc').attr({ src: results[resultIndex].contentImageSrc });
        $('#relatedResult0' + resultIndex).css( 'display', 'none' );      
    }
    //국민참여재판 절차안내 튜토리얼
    else if(test == "02"){
        $('#header_img').attr({ src:  "/assets/images/test02_header.png" });                     // titleSrc 세팅
        $('#tutorial_result_content').css( 'display', '' ); 
    }
    */

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
}

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