function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    console.log("p5 has called setup function");
    classifier = ml5.imageClassifier('MobileNet',modelLoaded)
  }
  
console.log("ml5.version = ",ml5.version); 

classifier = ml5.imageClassifier("MobileNet",modelLoaded);

 function modelLoaded(){
     console.log("modelLoaded")
 }

 function check() {
     img = document.getElementById("captured_image");
     classifier.classify(img,gotResult);
 }

 function gotResult(error,results) {
     if (error) {
         console.log(error);
     }
     else {
         console.log(results);
         document.getElementById("object_name").innerHTML = results[0].label;
     }
 }

  
  function modelLoaded() {
    console.log("modelLoaded")
  }
  function draw() {
    console.log("p5 has called draw function");
    image(video,0,0,300,300)
    classifier.classify(video,gotResult);
  }
  
  function gotResult(error,results) {
   if (error) {
     console.log(error)
   } else {
     console.log(results);
     document.getElementById("result_oject_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)
   }
  }
  
  
  
  
  