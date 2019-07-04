

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var cx = canvas.width = 50*16;
var cy = canvas.height = 47*16;
var halfRadius = 8*16;
var heatmap = h337.create({
    container: document.getElementById("container")
})
// 首先绘制出边框
context.rect(0,0, cx, cy)
context.stroke();

// 绘制半场的弧线
context.beginPath();
// context.moveTo(cx/2, cy);
context.arc(cx/2, cy, halfRadius, 0, Math.PI, true);

// 绘制禁区的两个正方形
context.moveTo(cx-6*16, 0);
context.rect(cx/2-6*16, 0, 12*16, 19*16);
context.rect(cx/2-8*16, 0, 16*16, 19*16);

// 绘制罚球线的圆
context.moveTo(cx/2, 19*16);
context.arc(cx/2, 19*16, 6*16, 0, Math.PI*2, true);

// 绘制三分线
context.moveTo(3 * 16, 0);
context.lineTo(3 * 16, 14 * 16);
context.moveTo(cx - 3 * 16, 0);
context.lineTo(cx - 3 * 16, 14 * 16);
// context.moveTo(cx/2, 5.25*16);
// 三分线的弧线
var angleStart = Math.atan((14-5.25)/22);
var angleEnd = Math.PI - Math.atan((14-5.25)/22);
context.arc(cx/2, 5.25*16, 23.75*16, angleStart, angleEnd, false);

// 绘制合理冲撞区
context.moveTo(cx/2 - 3 * 16, 4*16);
context.lineTo(cx/2 + 3 * 16, 4 * 16);

context.moveTo(cx/2 - 4 * 16, 4*16);
context.lineTo(cx/2 - 4 * 16, 5.25 * 16);

context.moveTo(cx/2 + 4 * 16, 4*16);
context.lineTo(cx/2 + 4 * 16, 5.25 * 16);

context.moveTo(cx/2 + 4*16, 5.25*16);
context.arc(cx/2, 5.25*16, 4*16, 0, Math.PI, false);

context.stroke();

console.log(curry);

let shotchartdetail = curry.resultSets[0].rowSet;
var heatPoints = [];
shotchartdetail.forEach(item => {
    drawPoint(item[17], item[18]);
})
drawHeat();

function drawPoint(x, y){
    let pointX = x*1.6+cx/2;
    let pointY = y*1.6+5.25*16;
    heatPoints.push({x: pointX, y: pointY});
    // context.fillRect(x*1.6+cx/2, y*1.6+5.25*16, 4, 4);
}

function drawHeat(){
    heatmap.setData({
        max: 5,
        data: heatPoints
    })
}
