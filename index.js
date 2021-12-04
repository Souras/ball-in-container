// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

function createCircle() {
  // console.log('create circle is called');

  setInterval(() => {
    const bub1 = new Bubble(10, 10, ctx);
    bub1.show();
    bub1.move();
  }, 5000);
}

function createCanvas() {
  let canvas = document.getElementById('myCanvas');
  canvas.style.height = '200px';
  canvas.style.width = '400px';
  canvas.style.border = '1px solid red';
}
createCanvas();

let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');

class Bubble {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.preX = null;
    this.preY = null;
  }

  move() {
    let direction = 'down';
    setInterval(() => {
      this.preX = this.x;
      this.preY = this.y;
      if (direction === 'up') {
        this.x = this.x + Math.random();
        this.y = this.y - Math.random();
        if (this.y < 20) {
          direction = 'down';
        }
      } else if (this.y > 150) {
        this.x = this.x + Math.random();
        this.y = this.y + Math.random();
        direction = 'up';
      } else {
        this.x = this.x + Math.random();
        this.y = this.y + Math.random();
      }
      if (this.y < 20) {
        direction = 'down';
      }
      this.show();
    }, 100);
  }

  show() {
    // console.log('coordivates', this.x, this.y);
    this.ctx.clearRect(this.preX - 7, this.preY - 7, 15, 15);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}
createCircle();
// let bub1 = new Bubble(10, 10, ctx);
// let bub2 = new Bubble(50, 100, ctx);
// bub1.show();
// bub1.move();
// bub2.show();
// bub2.move();
