'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var Y_RECT = 70;
var Y_NAME = 250;
var GAP = 10;
var GAP_RECT = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, score) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(score);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_RECT) * i, CLOUD_Y + Y_NAME);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_RECT) * i, CLOUD_Y + Y_RECT, BAR_WIDTH, (BAR_HEIGHT* score[i]) / maxTime);
    ctx.fillText(Math.round(score[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_RECT) * i, Y_RECT);
  }
};
