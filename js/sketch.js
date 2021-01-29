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

  // 次の世代を作る
  next() {
    let n = new Gen();
    n.cells.fill(1);
    return n;
  }

  // 矩形を描画する
  draw() {
    // cellsの色
    fill(115, 112, 97);

    // cellsの枠の色
    stroke(0, 81, 146);

    for(let [i,c] of this.cells.entries()) {
      let x = i%8;
      let y = floor(i/8);

      // ひとつのセルのキャンバス上での幅を定義
      let w = height/8;

      // セルが生きているところだけ描画する
      if (c === 1) {
        // 最初の2つは矩形の左上のx,y座標
        rect(w*x, w*y, w, w);
      }
    }
  }
}
 
let g = new Gen();

function setup() {
  createCanvas(480, 480);
  background(0, 81, 146);

  // drow関数の計算
  let g = new Gen();
  g.draw();
}

// 再描画
function redrawAll() {
  background(0, 81, 146);
  g.draw();
}

// p5ではマウスがクリックされた瞬間にこの関数が計算される
function mousePressed() {
  g = g.next();
  redrawAll();
}

// 描画
function draw() {
  
}
