$(document).ready(function() {
    var stop_flag = true;
    var rec = new webkitSpeechRecognition();
    rec.continuous = true;
    rec.interimResults = false;
    rec.lang = 'ja-JP';
    
    rec.onresult = function(e) {
        rec.stop();
        for (var i = e.resultIndex; i < e.results.length; ++i) {
            if (e.results[i].isFinal) {
                var str = e.results[i][0].transcript;
                $("#log").append("<div class='balloon-set-box left'><div class='balloon'>" + str + "</div></div>");
                $("#log").scrollTop( $("#log")[0].scrollHeight );
                console.log('Recognised: ' + str);
            }
        }
    }

    rec.onstart = () => { console.log('on start') };
    rec.onend = () => { console.log('on end'); if(!stop_flag) { rec.start(); } };

    rec.onspeechstart = () => { console.log('on speech start') };
    rec.onspeechend = () => { console.log('on speech end') };

    rec.onosundstart = () => { console.log('on sound start') };
    rec.onsoundend = () => { console.log('on sound end') };

    rec.onaudiostart = () => { console.log('on audio start') };
    rec.onaudioend = () => { console.log('on audio end') };
    
    $("#startRecBtn").click(function() {
        stop_flag = false;
        rec.start();
    });
    $("#stopRecBtn").click(function() {
        stop_flag = true;
        rec.stop();
    });
});
