/*
    공유하기 기능 함수
*/
const url = encodeURI(window.location.href);
var pageId = "";
var kakaoImgSrc = "https://user-images.githubusercontent.com/55049159/201449154-3b91d106-9a07-488b-b163-95e5eed842bb.png"
window.onload = function()  {
   Kakao.init('06dd1f2514881e17de053dde9e87cc67');

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
            kakaoTitleImg[pageId].src,
          link: {
            mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app/result'+pageId+".html",
            webUrl: 'https://leafy-empanada-b0c97b.netlify.app/result'+pageId+".html",
          },
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app/result'+pageId+".html",
              webUrl: 'https://leafy-empanada-b0c97b.netlify.app/result'+pageId+".html",
            },
          },
          {
            title: '테스트하기',
            link: {
              mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app',
              webUrl: 'https://leafy-empanada-b0c97b.netlify.app',
            }
          }
        ]
      });
});

$("#kakaoBtn2").on("click", function(){
  Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '국민참여재판은 어떻게 진행되는 걸까?\n국민참여재판 진행 절차에 대해 알아보세요.',
        imageUrl:
          "https://user-images.githubusercontent.com/55049159/205935949-d6649b22-7221-4481-836b-6d6979f0a68c.png",
        link: {
          mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app/result.html',
          webUrl: 'https://leafy-empanada-b0c97b.netlify.app//result.html',
        },
      },
      buttons: [
        {
          title: '결과 보기',
          link: {
            mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app/result.html',
            webUrl: 'https://leafy-empanada-b0c97b.netlify.app/result.html',
          },
        },
        {
          title: '테스트하기',
          link: {
            mobileWebUrl: 'https://leafy-empanada-b0c97b.netlify.app',
            webUrl: 'https://leafy-empanada-b0c97b.netlify.app',
          }
        }
      ]
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

$("#resetBtn").on("click", function(){
   location.href = "index.html";
});