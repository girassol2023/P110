Webcam.set({
    width: 350,
    height: 300,
    imageFormat: "png",
    pngQuality: 90
})

camera = document.getElementById("camera");
Webcam.attach("#camera")
function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    })
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k4MGIQHRy/model.json", modelloged)
function modelloged() {
    console.log("modelocarregado")
}
function speak() {
    var synth = window.speechSynthesis;
    speakdata1 = "a primeira previsão é:" + previsão1;
    speakdata2 = "a segunda previsão é:" + previsão2;
    speakdata3 = "a terceira previsão é:" + previsão3;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2 + speakData3); synth.speak(utterThis)
}

function check() {
    img= document.getElementById("captured_image");
    classifier.classify(img,getResult);
}
function getResult(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
   
         document.getElementById("resultemojiname").innerHTML= results[0].label
        document.getElementById("resultemojiname2").innerHTML= results[1].label
        document.getElementById("resultemojiname3").innerHTML= results[2].label
    
        previsão1= results[0].label
        previsão2= results[1].label
        previsão3= results[2].label

        if (previsão1=="feliz") {
           document.getElementById("update emoji").innerHTML= "&#128522"
        }

        if (previsão1=="triste") {
            document.getElementById("update emoji").innerHTML= "&#128532"
        }

        if (previsão1=="raiva") {
            document.getElementById("update emoji").innerHTML= "&#128548"
        }


        if (previsão2=="feliz") {
            document.getElementById("update emoji2").innerHTML= "&#128522"
         }
 
         if (previsão2=="triste") {
             document.getElementById("update emoji2").innerHTML= "&#128532"
         }
 
         if (previsão2=="raiva") {
             document.getElementById("update emoji2").innerHTML= "&#128548"
         }


         if (previsão3=="feliz") {
            document.getElementById("update emoji3").innerHTML= "&#128522"
         }
 
         if (previsão3=="triste") {
             document.getElementById("update emoji3").innerHTML= "&#128532"
         }
 
         if (previsão3=="raiva") {
             document.getElementById("update emoji3").innerHTML= "&#128548"
         }
        }
}