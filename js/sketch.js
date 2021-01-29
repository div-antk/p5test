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

    // 現世代
    let t = this;

    // 次世代
    let n = new Gen();

    for(let i=0; i<t.cells.length; i++) {
      
      // 現世代の添字iのセルの、回りにある生きたセルの数をLとする
      let L = t.livesAround(t.indexToXy(i));

      if (t.cells[i] === 0) {
        // 現世代で死んでいるセルは3個の生きたセルに囲まれてるときだけ誕生（復活？）する
        // Lが3のときだけ1を代入する
        n.cells[i] = (L === 3) ? 1 : 0;
        
      } else {
        // 現世代で生きているセルは2個か3個の生きたセルに囲まれてる時だけ次の世代でも生き延びる
        // それ以外は過密で死ぬ
        n.cells[i] = (L === 2 || L === 3) ? 1 : 0;
      }
    }

    return n;
  }

  // 生きているセルを数える
  livesAround(x,y) {
    let L = 0;
    // (a,b)の位置にあるセルの生死を調べて生きているセルの合計を取る
    for(let a=x-1; a<=y+1; a++) {
      for(let a=x-1; a<=y+1; a++) {

        let i = this.xyToIndex(a,b);
        // L は生きてるセルを数えるための変数
        // 座標が範囲内かつセルが生きてる場合だけLを増やす
        L += (i === -1) ? 0 : this.cells[i];
      }
    }
    // 囲まれた中央のセルもLに影響してしまうので調整
    L -= this.cells[this.xyToIndex(x,y)];
    return
  }


  // 座標から添字に変換する関数
  xyToIndex(x,y) {
    let w = sqrt(this.cells.length);
    if (x<0 || x>=w || y<0 || y>=w) return -1;
    return y*w + x;
  }

  // 添字から座標を計算する関数
  indexToXy(i) {

    // セルの1辺の数を8固定ではない場合を想定した変数
    let w = sqrt(this.cells.length)

    let x = i%w;
    let y = floor(i/8);

    return [x,y];
  }

  // 矩形を描画する
  draw() {
    // cellsの色
    fill(115, 112, 97);

    // cellsの枠の色
    stroke(0, 81, 146);

    for(let [i,c] of this.cells.entries()) {

      let [x,y] = this.indexToXy(i);

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
