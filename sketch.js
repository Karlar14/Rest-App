const { Part } = require("c:/users/12403/.vscode/extensions/samplavigne.p5-vscode-1.2.8/p5types");

var song
var fft
var img

let rain = []


function preload(){
  song = loadSound('Clair de Lune With Rain.mp3')
  img = loadImage('rain.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  angleMode(DEGREES)
  imageMode(CENTER)
  img.filter(BLUR, 2)
  fft = new p5.FFT()
  rain.push(new Drop())
}

function draw() {
  
  stroke(255)
  strokeWeight(3)
  noFill()

  translate(width/2, height/2)

  image(img, 0, 0, width, height)

  fft.analyze()
  amp = fft.getEnergy(20,200)

//   var wave = fft.waveform()

//   for (var t = -1; t <= 1; t += 2){
//     beginShape()
//   for(var i = 0; i <= 180; i+= 0.3){
//     var index = floor (map(i, 0, width, 0 , wave.length-1))
    
//     var r = map(wave[index], -1, 1, 150, 350)
    
//     var x = r*sin(i) * t
//     var y = r*cos(i)
//     vertex(x,y)
//   }
//   endShape()
// }

var d = new Drop


for (var i=rain.length-1; i >= 0 ; i-- )
{
 d.fall()
d.show()
}
}

function mouseClicked(){
  if (song.isPlaying()){
    song.pause()
  }
  else{
    song.play()
    loop()
  }
}

class Drop{
  constructor(){
    this.pos = createVector()
    this.vel = createVector()
    this.acc = createVector()
  }


  render()
  {
    stroke(255)
    strokeWeight(4)
    line(this.pos.x,this.pos.y,this.pos.x+3,this.pos.x+3)
  }

}

