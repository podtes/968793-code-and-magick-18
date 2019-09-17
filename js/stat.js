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


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = times[0]; // почему, если объявить переменную внутри функции, то она не будет работать?

  var findMaxTime = function () {
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    return maxTime;
  };

  findMaxTime();

  var showResultPoints = function () {
    for (var i = 0; i < times.length; i++) {
      ctx.fillText(Math.round(times[i]), 140 + i * 90, NAME_Y - FONT_GAP - POINTS_GAP - (BAR_HEIGHT * times[i] / maxTime));
    }
  };

  showResultPoints();

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(205, ' + Math.random() * 100 + '%, 70%)';
    }
    ctx.fillRect(NAME_X + (BAR_WIDTH + GAP) * i, NAME_Y - FONT_GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], NAME_X + (BAR_WIDTH + GAP) * i, NAME_Y);
  }
};
