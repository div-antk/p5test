class Gen {
  constructor() {
    this.cells = [
      0,0,0,0,0,0,0,0,
      0,0,0,1,0,0,0,0,
      0,1,0,1,0,0,0,0,
      0,0,1,1,0,0,0,0,
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,
    ];
  }
  // 矩形を描画する
  draw() {
    for(let [i,c] of this.cells.entries()) {
      let x = i%8;
      let y = floor(i/8);

      // ひとつのセルのキャンバス上での幅を定義
      let w = height/8;

      // 最初の2つは矩形の左上のx,y座標
      rect(w*x, w*y, w, w);
    }
  }
}

function setup() {
  createCanvas(480, 480);
  // 背景色黒
  background(0);

  // drow関数の計算
  let g = new Gen();
  g.draw();
}

// 描画
function draw() {
  
}
