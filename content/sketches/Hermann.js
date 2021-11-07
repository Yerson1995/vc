var w = 490
var h = 370

function setup() {
    createCanvas(w, h)
  }
  
  function draw() {
    background('white')

    x = 10
    while (x < w){
      y = 10
      while (y < h){
        fill('black')
        rect(x, y, 50, 50)
        y += 60
      }
      x += 60
    }

  }