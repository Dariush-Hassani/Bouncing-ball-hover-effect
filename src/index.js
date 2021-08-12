import "./styles.css";

let animation = function () {
  if (window.isInAnim) return;

  window.isInAnim = true;
  let move1 = true;
  let move2 = false;
  let move3 = false;
  let move4 = false;
  let h1 = 120;
  let h2 = 70;
  let h3 = 30;
  let h4 = 10;
  let a1 = -3000;
  let a2 = -3000;
  let a3 = -3000;
  let a4 = -3000;
  let frame = 10;
  let dt = frame / 1000;
  let v01 = Math.sqrt(2 * -a1 * h1);
  let v02 = Math.sqrt(2 * -a2 * h2);
  let v03 = Math.sqrt(2 * -a3 * h3);
  let v04 = Math.sqrt(2 * -a4 * h4);
  let timer;
  let t1 = 0;
  let t2 = 0;
  let t3 = 0;
  let t4 = 0;
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let x4 = 0;
  timer = setInterval(() => {
    if (move1) {
      t1 += dt;
      x1 = 0.5 * a1 * t1 * t1 + v01 * t1;
      if (x1 > 0) {
        this.style.top = -x1 + "px";
      } else {
        this.style.top = 0 + "px";
        move1 = false;
        move2 = true;
      }
    } else if (move2) {
      t2 += dt;
      x2 = 0.5 * a2 * t2 * t2 + v02 * t2;
      if (x2 > 0) {
        this.style.top = -x2 + "px";
      } else {
        this.style.top = 0 + "px";
        move2 = false;
        move3 = true;
      }
    } else if (move3) {
      t3 += dt;
      x3 = 0.5 * a3 * t3 * t3 + v03 * t3;
      if (x3 > 0) {
        this.style.top = -x3 + "px";
      } else {
        this.style.top = 0 + "px";
        move3 = false;
        move4 = true;
      }
    } else if (move4) {
      t4 += dt;
      x4 = 0.5 * a4 * t4 * t4 + v04 * t4;
      if (x4 > 0) {
        this.style.top = -x4 + "px";
      } else {
        this.style.top = 0 + "px";
        window.isInAnim = false;
        clearInterval(timer);
      }
    }
  }, frame);
};

document.getElementById("app").innerHTML = `
<h1 class="title">Bouncing Ball on Hover</h1>
<div class="center marg-t-70">
  <div class='bb-card'>
    <h3>Hover Me</h3>
    <div class="marg-t-30">its bouncing ball. For more information click below.</div>
    <a href="https://en.wikipedia.org/wiki/Bouncing_ball">More ... </a>
  </div>
</div>
`;

document
  .getElementsByClassName("bb-card")[0]
  .addEventListener("mouseenter", animation);
