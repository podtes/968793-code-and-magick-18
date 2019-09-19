'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var NAME_X = 140;
var NAME_Y = 260;
var GAP = 50;
var FONT_GAP = 20;
var POINTS_GAP = 10;
var maxTime = 0;
var findMaxTime = function (timesArray) {
  for (var i = 0; i < timesArray.length; i++) {
    if (timesArray[i] > maxTime) {
      maxTime = timesArray[i];
    }
  }

  return maxTime;
};
var showResultPoints = function (timesArray, canvas) {
  for (var i = 0; i < timesArray.length; i++) {
    canvas.fillText(Math.round(timesArray[i]), 140 + i * 90, NAME_Y - FONT_GAP - POINTS_GAP - (BAR_HEIGHT * timesArray[i] / maxTime));
  }
};
var getRandomBlueColor = function (canvas) {
  canvas.fillStyle = 'hsl(205, ' + Math.random() * 100 + '%, 70%)';
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  maxTime = times[0];

  findMaxTime(times);

  showResultPoints(times, ctx);

  var drawGistogram = function () {
    var GISTOGRAM_X = NAME_X + (BAR_WIDTH + GAP) * i;
    var GISTOGRAM_Y = NAME_Y - FONT_GAP - (BAR_HEIGHT * times[i] / maxTime);
    ctx.fillRect(GISTOGRAM_X, GISTOGRAM_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  };

  var drawGistogramName = function () {
    ctx.fillText(names[i], NAME_X + (BAR_WIDTH + GAP) * i, NAME_Y);
  };

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      getRandomBlueColor(ctx);
    }
    drawGistogram();
    ctx.fillStyle = '#000000';
    drawGistogramName();
  }
};
