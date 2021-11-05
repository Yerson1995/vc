let img;
let facemesh;
let predictions = [];

function setup() {
  
  createCanvas(494, 361);

  
  img = createImg("/docvc/docs/sketches/troxler_main.png", imageReady);
  

  img.hide(); 
  frameRate(1); 
}

// when the image is ready, then load up poseNet
function imageReady() {
    facemesh = ml5.facemesh(modelReady);
  
    facemesh.on("predict", results => {
      predictions = results;
    });
  }
  
  // when poseNet is ready, do the detection
  function modelReady() {
    console.log("Model ready!");
    facemesh.predict(img);
  }
  
  // draw() will not show anything until poses are found
  function draw() {
    if (predictions.length > 0) {
      image(img, 0, 0, width, height);
      drawKeypoints();
      noLoop(); // stop looping when the poses are estimated
    }
  }
  
  // A function to draw ellipses over the detected keypoints
  function drawKeypoints() {
    for (let i = 0; i < predictions.length; i += 1) {
      const keypoints = predictions[i].scaledMesh;
  
      // Draw facial keypoints.
      for (let j = 0; j < keypoints.length; j += 1) {
        const [x, y] = keypoints[j];
  
        fill(0, 255, 0);
        ellipse(x, y, 5, 5);
      }
    }
  }