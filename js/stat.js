var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_X = 140;
var TEXT_Y = 260;
var GAP = 50;
var FONT_GAP = 20;


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);

  ctx.fillStyle = '#000000';

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = '#000000'; //тут будет условие окрашивания столбца в рандомный синий цвет
    }; //тут нужно ставить точку с запятой?
    ctx.fillRect(TEXT_X + (BAR_WIDTH + GAP) * i, TEXT_Y - FONT_GAP - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillText(names[i], TEXT_X + (BAR_WIDTH + GAP) * i, TEXT_Y);
  };
};
