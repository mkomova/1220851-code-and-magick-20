'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_RECT = 50;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, score) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(score);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.random() * 100;
      ctx.fillStyle = 'hsla(235, ' + saturation + '%' + ', 50%)';
    }

    var xBar = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_RECT) * i;
    var height = (BAR_HEIGHT * score[i]) / maxTime;
    var yText = CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP;
    var yBar = yText - FONT_GAP - height;

    ctx.fillRect(xBar, yBar, BAR_WIDTH, height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], xBar, yText);
    ctx.fillText(Math.round(score[i]), xBar, yBar - GAP);
  }

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  var titleX = CLOUD_X + GAP * 2;
  var titleY = CLOUD_Y + GAP * 2;
  ctx.fillText('Ура вы победили!', titleX, titleY);
  ctx.fillText('Список результатов:', titleX, titleY + FONT_GAP);
};
