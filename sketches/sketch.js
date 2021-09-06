const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;
    context.strokeStyle = 'rgba(255,255,255,1)';

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.18;
    const iy = width * 0.18;
    const off = width * 0.04; 
    let x, y;
    const radiusOfRondedRect = 10;

    //function to draw a rounded rectangle
    CanvasRenderingContext2D.prototype.roundRect = 
    function (xRoundRect, yRoundRect, widthRoundRect, heightRoundRect, radius) {
      if (w < 2 * radius) radius = w / 2;
      if (w < 2 * radius) radius = w / 2;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + w, y, x + w, y + h, radius);
      this.arcTo(x + w, y + w, x, y + h, radius);
      this.arcTo(x, y + h, x, y, radius);
      this.arcTo(x, y, x + w, y, radius);
      this.closePath();
      return this;
    }
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();
        context.roundRect(x, y, w, h, radiusOfRondedRect);
        context.stroke();

          if (Math.random() > 0.5) {
              context.beginPath();
              context.rect(x + off / 2, y + off / 2, w - off, h - off);
              context.stroke();
          }
        
        }
    }
  };
};

canvasSketch(sketch, settings);