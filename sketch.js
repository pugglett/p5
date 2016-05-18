var r, g, b;
var w = window.innerWidth;
var h = window.innerHeight;

// function setup() {
//   // createCanvas(720, 400);
//   // createCanvas(document.height(), document.width());
//   // Pick colors randomly
//   createCanvas(w, h)
//   r = random(255);
//   g = random(255);
//   b = random(255);
// }

// function draw() {
//   background(127);
//   // Draw a circle
//   strokeWeight(2);
//   stroke(r, g, b);
//   fill(r, g, b, 127);
//   ellipse(360, 200, 200, 200);
// }

// // When the user clicks the mouse
// function mousePressed() {
//   // Check if mouse is inside the circle
//   var d = dist(mouseX, mouseY, 360, 200);
//   if (d < 100) {
//     // Pick new random color values
//     r = random(255);
//     g = random(255);
//     b = random(255);
//   }
// }

function setup() {
  createCanvas(w, h);
  img1 = loadImage("images/sitting.png");
  img2 = loadImage("images/standing.png");
}

function draw() {
  function onClick() {
    if (mouseX >= 1000) {
      image(img1, mouseX, mouseY);
    } else {
      image(img2, mouseX, mouseY);
    }
  }
}