        var num = 1;

        var q = {
            1: {"title": "1번<br><br>1번문제", "type": "EI", "A": "<br>웅<br>", "B": "<br>아니야<br>"},
            2: {"title": "2번<br><br>2번문제", "type": "EI", "A": "<br>웅<br>", "B": "<br>아니야<br>"},
            3: {"title": "3번<br><br>3번문제", "type": "EI", "A": "<br>웅<br>", "B": "<br>아니야<br>"},
            4: {"title": "4번<br><br>4번문제", "type": "SN", "A": "<br>웅<br>", "B": "<br>아니야<br>"},
            5: {"title": "5번<br><br>5번문제", "type": "SN", "A": "<br>웅<br>", "B": "<br>아니야<br>"}
        }

        var result = {
            "ISTJ": {"moneytype": "관리자형", "explain": "", "img": "1.jpg"},
            "ISFJ": {"moneytype": "관리자형", "explain": "", "img": "1.jpg"},
            "ESTJ": {"moneytype": "관리자형", "explain": "", "img": "1.jpg"},
            "ESFJ": {"moneytype": "관리자형", "explain": "", "img": "1.jpg"},

            "ISTP": {"moneytype": "탐험가형", "explain": "", "img": "2.jpg"},
            "ISFP": {"moneytype": "탐험가형", "explain": "", "img": "2.jpg"},
            "ESTP": {"moneytype": "탐험가형", "explain": "", "img": "2.jpg"},
            "ESFP": {"moneytype": "탐험가형", "explain": "", "img": "2.jpg"},

        
            "INTJ": {"moneytype": "분석형", "explain": "", "img": "3.jpg"},
            "INTP": {"moneytype": "분석형", "explain": "", "img": "3.jpg"},
            "ENTJ": {"moneytype": "분석형", "explain": "", "img": "3.jpg"},
            "ENTP": {"moneytype": "분석형", "explain": "", "img": "3.jpg"},

            "INFJ": {"moneytype": "외교형", "explain": "", "img": "4.jpg"},
            "INFP": {"moneytype": "외교형", "explain": "", "img": "4.jpg"},
            "ENFJ": {"moneytype": "외교형", "explain": "", "img": "4.jpg"},
            "ENFP": {"moneytype": "외교형", "explain": "", "img": "4.jpg"},           
            
        }

        function start() {
            $(".start").hide();
            $(".question").show();
            next();
        }

        //A 만 ++;
        $("#A").click(function(){
            var type = $("#type").val();
            var preValue = $("#"+type).val();
            $("#"+type).val(parseInt(preValue)+1);
            next();
        });

        $("#B").click(function(){
            next();
        });

        function next() {
            if (num == 5) {
                $(".question").hide();
                $(".result").show();
                var mbti = "";
                
                ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
                ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
                ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
                ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";

                $("#img").attr("src",result[mbti]["img"]);
                $("#moneytype").html(result[mbti]["moneytype"]);
                $("#explain").html(result[mbti]["explain"]);
            }
             else {
                $(".progress-bar").attr('style','width: calc(100/5*'+num+'%)');
                $("#title").html(q[num]["title"]);
                $("#type").val(q[num]["type"]);
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);
                num++;
            }
        }