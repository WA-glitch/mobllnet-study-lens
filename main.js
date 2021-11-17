(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
  }
  var previous_result = '';
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      if((results[0].confidence > 0.5) && (previous_result != results[0].
        label)){
          console.log(results);
          previous_result = results[0].label;
          var synth = window.speechSynthesis;
          speak_data = 'object detected is - '+results[0].label;
          var utterThis = new SpeechSyntt.getElementById("result_object_namt.getElementById("result_obje
    }
  }
  