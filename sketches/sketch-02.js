const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color

const settings = {
  dimensions: [ 1080 , 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

   


    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.005;
    const h = height * 0.05;

    let x,y;

    const num = 25;
    const radius = width * 0.5;
    
    for (let i = 0; i < num; i++) {
      // Returns a hex code for a light blue

      context.strokeStyle = randomColor({
        luminosity: 'light',
        hue: 'blue'
      });

     context.fillStyle = randomColor();

      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate (x,y);
      context.rotate(-angle);
      context.scale(random.range(0.2, 1), 2);

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);


      context.lineWidth = random.range(0.5, random.range(0,30));

      context.beginPath();
      context.arc(4, 0, radius * random.range(0.5, 1.5), slice * random.range(0, -2), slice * random.range(1, -10));
      context.stroke();
      context.restore();

    }

    
  };
};

canvasSketch(sketch, settings);
