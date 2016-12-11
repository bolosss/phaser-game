var loadState = {
  preload: function () {

    var progressBar = game.add.sprite(game.world.centerX, game.world.centerY, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    game.load.spritesheet('slime', 'assets/heros.png', 40, 36, 12);
    game.load.spritesheet('coin', 'assets/coin.png', 32, 32, 4);
    game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
    game.load.spritesheet('enemy', 'assets/enemy.png', 32, 32, 8);
    game.load.spritesheet('boss', 'assets/boss.png', 56, 74, 5);
    game.load.spritesheet('health', 'assets/coeur.png', 156, 24, 6);

    game.load.image('background', 'assets/background.jpg');
    game.load.image('potion', 'assets/red-potion.png');
    game.load.image('pixel', 'assets/particule.png');
    game.load.image('tileset', 'assets/tileset.png');
    game.load.image('startButton', 'assets/bouton1.png');
    game.load.image('minion', 'assets/minion.png');
    game.load.image('minion2', 'assets/minion2.png');
    game.load.image('explosion', 'assets/explosion.png');
    game.load.image('random', 'assets/random.png');
    game.load.image('arrows', 'assets/arrowKeys.png');
    game.load.image('wallH', 'assets/wallHorizontal.png');
    game.load.image('missile', 'assets/missile.png');

    game.load.tilemap('1', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('2', 'assets/map2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('3', 'assets/map3.json', null, Phaser.Tilemap.TILED_JSON);

    game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
    game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
    game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
    game.load.audio('elephant', ['assets/elephant.mp3']);
    game.load.audio('potion', ['assets/powerup.ogg', 'assets/powerup.mp3']);

    game.load.text('level1', 'assets/data/level1.json');
    game.load.text('level2', 'assets/data/level2.json');
    game.load.text('level3', 'assets/data/level3.json');
  },

  create: function () {
    game.state.start('menu');
  }
};
