Webcam.set({
    
   width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});


    camera = documant.getElementById("camera");


Webcam.attach( '#camera' );





function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src+"' +data_uri+'"/>';
    });
}


console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/FfpK4MHSP/model.json',modelLoaded);
function modelLoaded() {
    console.log('model Loaded!');
}

function speak(){
    var synth = window.speachSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "Ant the second prediction is " + prediction_2;
    var utterThis = new SpeachSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}