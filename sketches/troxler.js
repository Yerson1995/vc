let img;

function setup() {
  
  createCanvas(494, 361);

  
  img = createImg("/docvc/docs/sketches/troxler_main.png", imageReady);
  

  img.hide(); 
  frameRate(1); 
}