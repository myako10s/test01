$(document).ready(function() {
    var rec = new webkitSpeechRecognition();
        rec.continuous = true;
        rec.interimResults = false;
        rec.lang = 'ja-JP';

        var userSaid = function(str, s) {
            return str.indexOf(s) > -1;
        }

        rec.onresult = function(e) {
            rec.stop();
            for (var i = e.resultIndex; i < e.results.length; ++i) {
                if (e.results[i].isFinal) {
                        var str = e.results[i][0].transcript;
                        console.log('Recognised: ' + str);
                        if (userSaid(str, '赤')) {
                            $('#box').css("background-color","red");
                }
                            else if (userSaid(str, '青')) {
                            $('#box').css("background-color","blue");
                }
                            else if (userSaid(str, '黄色')) {
                                $('#box').css("background-color","yellow");
                            }
                            else if (userSaid(str, '緑')) {
                                $('#box').css("background-color","green");
                                            }

                                        }
                                    }
                            }

    rec.onstart = () => { console.log('on start') };
    rec.onend = () => { console.log('on end'); rec.start(); };

    rec.onspeechstart = () => { console.log('on speech start') };
    rec.onspeechend = () => { console.log('on speech end') };

    rec.onosundstart = () => { console.log('on sound start') };
    rec.onsoundend = () => { console.log('on sound end') };

    rec.onaudiostart = () => { console.log('on audio start') };
    rec.onaudioend = () => { console.log('on audio end') };
    
    $("#startRecBtn").click(function() {
      rec.start();
    });
    $("#stopRecBtn").click(function() {
      rec.stop();
    });
});
