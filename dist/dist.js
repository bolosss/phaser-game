var bootState={preload:function(){game.load.image("progressBar","assets/progressBar.png"),game.load.script("webfont","//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js")},create:function(){game.stage.backgroundColor="#313131",game.physics.startSystem(Phaser.Physics.ARCADE),game.state.start("load")}},loadState={preload:function(){var e=game.add.sprite(game.world.centerX,game.world.centerY,"progressBar");e.anchor.setTo(.5,.5),game.load.setPreloadSprite(e),game.load.spritesheet("achille","assets/achille.png",40,36,12),game.load.spritesheet("ernest","assets/ernest.png",40,36,12),game.load.spritesheet("coin","assets/coin.png",32,32,4),game.load.spritesheet("mute","assets/muteButton.png",28,22),game.load.spritesheet("enemy","assets/enemy.png",32,32,8),game.load.spritesheet("enemy2","assets/enemy2.png",40,26,8),game.load.spritesheet("boss","assets/boss.png",56,74,5),game.load.spritesheet("health","assets/coeur.png",156,24,6),game.load.spritesheet("healthBoss","assets/health-boss.png",80,16,6),game.load.image("background","assets/background.jpg"),game.load.image("backgroundscroll","assets/backgroundscroll.png"),game.load.image("potion","assets/red-potion.png"),game.load.image("pixel","assets/particule.png"),game.load.image("tileset","assets/tileset.png"),game.load.image("minion","assets/minion.png"),game.load.image("minion2","assets/minion2.png"),game.load.image("explosion","assets/explosion.png"),game.load.image("achilleimg","assets/achilleimg.png"),game.load.image("ernestimg","assets/ernestimg.png"),game.load.image("arrows","assets/arrowKeys.png"),game.load.image("wallH","assets/plateforme.png"),game.load.image("missile","assets/missile.png"),game.load.image("healthBonus","assets/healthBonus.png"),game.load.tilemap("1","assets/map1.json",null,Phaser.Tilemap.TILED_JSON),game.load.tilemap("2","assets/map2.json",null,Phaser.Tilemap.TILED_JSON),game.load.tilemap("3","assets/map3.json",null,Phaser.Tilemap.TILED_JSON),game.load.tilemap("4","assets/map4.json",null,Phaser.Tilemap.TILED_JSON),game.load.audio("jump",["assets/jump.ogg","assets/jump.mp3"]),game.load.audio("coin",["assets/coin.ogg","assets/coin.mp3"]),game.load.audio("hurtSound",["assets/hurt.ogg","assets/hurt.mp3"]),game.load.audio("dead",["assets/dead.ogg","assets/dead.mp3"]),game.load.audio("castelvania",["assets/castelvania.mp3","assets/castelvania.ogg"]),game.load.audio("potion",["assets/powerup.ogg","assets/powerup.mp3"]),game.load.audio("boom",["assets/laser.ogg","assets/laser.mp3"]),game.load.audio("bossDieSound",["assets/bossDie.ogg","assets/bossDie.mp3"]),game.load.audio("bossHurtSound",["assets/bossHurt.ogg","assets/bossHurt.mp3"]),game.load.audio("enemyDieSound",["assets/enemyDie.ogg","assets/enemyDie.mp3"]),game.load.audio("explosion",["assets/explosion.ogg","assets/explosion.mp3"]),game.load.audio("fall",["assets/fall.ogg","assets/fall.mp3"]),game.load.text("level1","assets/data/level1.json"),game.load.text("level2","assets/data/level2.json"),game.load.text("level3","assets/data/level3.json"),game.load.text("level4","assets/data/level4.json")},create:function(){game.state.start("menu")}},menuState={create:function(){game.stage.backgroundColor="#313131",this.explosion=game.add.audio("explosion"),this.explosion.volume=.5,this.music=game.add.audio("castelvania",1,!0),this.fall=game.add.audio("fall"),this.fall.volume=.3,this.fall.play(),game.time.events.add(500,this.titleRandom,this),game.time.events.add(800,this.titleExplosion,this),game.time.events.add(800,this.titleMinion,this),game.time.events.add(1800,this.titleText,this),game.time.events.add(1800,this.titleStart,this),game.time.events.add(1800,this.titleControls,this),game.explosion=game.add.sprite(400,game.world.centerY,"explosion"),game.explosion.anchor.set(.5),game.explosion.scale.setTo(0),game.random=game.add.sprite(400,-70,"achilleimg"),game.random.anchor.set(.5),game.minion=game.add.sprite(400,game.world.centerY,"minion"),game.minion.anchor.set(.5),game.nameLabel=game.add.text(400,-50,"Random Guy Adventures",{font:fontxl,fill:textColor}),game.nameLabel.anchor.setTo(.5,.5),game.startButton=game.add.text(400,700,"Cliquez pour commencer !",{font:fontxl,fill:textColor}),game.startButton.anchor.set(.5),game.input.onDown.add(this.level1,this),game.arrows=game.add.sprite(900,game.world.centerY-15,"arrows"),game.arrows.anchor.set(.5),this.muteButton=game.add.button(20,20,"mute",this.toggleSound,this),this.muteButton.input.useHandCursor=!0,game.sound.mute&&(this.muteButton.frame=1)},titleRandom:function(){game.add.tween(game.random).to({y:game.world.centerY},1e3).easing(Phaser.Easing.Bounce.Out).start()},titleText:function(){game.add.tween(game.nameLabel).to({y:100},1e3).easing(Phaser.Easing.Circular.Out).start()},titleExplosion:function(){game.add.tween(game.explosion.scale).to({x:1,y:1},500,Phaser.Easing.Bounce.Out,!0),game.add.tween(game.explosion).to({angle:-5},500).to({angle:0},500).loop().start(),this.explosion.play()},titleStart:function(){game.add.tween(game.startButton).to({y:game.world.centerY+200},1e3).easing(Phaser.Easing.Circular.Out).start(),void 0===this.musicplay&&this.music.loopFull(),this.musicplay=1},titleControls:function(){game.add.tween(game.arrows).to({x:560,y:game.world.centerY-15},1e3).easing(Phaser.Easing.Circular.Out).start(),game.add.tween(game.arrows.scale).to({x:.8,y:.8},250).to({x:1,y:1},250).loop().start()},titleMinion:function(){game.minion.destroy(),game.minion=game.add.sprite(400,game.world.centerY,"minion2"),game.minion.anchor.setTo(.5,.5),game.add.tween(game.minion).to({x:200,y:game.world.centerY-100},1e3).easing(Phaser.Easing.Circular.Out).start(),game.add.tween(game.minion).to({angle:-50},1e3,Phaser.Easing.Circular.Out,!0)},level1:function(){this.muteButton.input.pointerOver()||100!==game.nameLabel.y||game.state.start("character")},toggleSound:function(){game.sound.mute=!game.sound.mute,this.muteButton.frame=game.sound.mute?1:0},restartGame:function(){this.castelvania.stop()}},characterState={create:function(){game.choice=game.add.text(400,100,"Choix du personnage",{font:fontxl,fill:textColor}),game.choice.anchor.set(.5),game.achilleName=game.add.text(400,game.world.centerY+200,"Achille",{font:fontxl,fill:textColor}),game.achilleName.anchor.set(.5),game.achilleName.alpha=0,game.ernestName=game.add.text(400,game.world.centerY+200,"Ernest",{font:fontxl,fill:textColor}),game.ernestName.anchor.set(.5),game.ernestName.alpha=0,game.achille=game.add.sprite(325,game.world.centerY,"achilleimg"),game.achille.anchor.set(.5),game.achille.alpha=.5,game.achille.inputEnabled=!0,game.ernest=game.add.sprite(475,game.world.centerY,"ernestimg"),game.ernest.anchor.set(.5),game.ernest.alpha=.5,game.ernest.inputEnabled=!0,game.input.onDown.add(this.characterChoice,this),this.muteButton=game.add.button(20,20,"mute",this.toggleSound,this),this.muteButton.input.useHandCursor=!0,game.sound.mute&&(this.muteButton.frame=1)},update:function(){game.achille.input.pointerOver()?(game.achille.alpha=1,game.achilleName.alpha=1):game.ernest.input.pointerOver()?(game.ernest.alpha=1,game.ernestName.alpha=1):(game.achille.alpha=.5,game.ernest.alpha=.5,game.achilleName.alpha=0,game.ernestName.alpha=0)},toggleSound:function(){game.sound.mute=!game.sound.mute,this.muteButton.frame=game.sound.mute?1:0},characterChoice:function(){if(game.achille.input.pointerOver())game.character="achille";else{if(!game.ernest.input.pointerOver())return;game.character="ernest"}game.state.start("play",!0,!1,1)}},playState={init:function(e){switch(e){case 2:this.levelData=JSON.parse(this.game.cache.getText("level2"));break;case 3:this.levelData=JSON.parse(this.game.cache.getText("level3"));break;case 4:this.levelData=JSON.parse(this.game.cache.getText("level4"));break;default:this.levelData=JSON.parse(this.game.cache.getText("level1"))}this.conf={},this.conf.mapName=e,this.conf.playerX=this.levelData.playerStart.x,this.conf.playerY=this.levelData.playerStart.y,this.conf.coinX=this.levelData.coinStart.x,this.conf.coinY=this.levelData.coinStart.y,this.conf.coinPosition=this.levelData.coinPosition,this.conf.potionX=this.levelData.potionStart.x,this.conf.potionY=this.levelData.potionStart.y,this.conf.potionPosition=this.levelData.potionPosition,1===this.conf.mapName&&(this.conf.movingWallX=this.levelData.movingwallStart.x,this.conf.movingWallY=this.levelData.movingwallStart.y),3===this.conf.mapName&&(this.conf.bossX=this.levelData.bossStart.x,this.conf.bossY=this.levelData.bossStart.y,this.conf.bossHealthX=this.levelData.bossHealth.x,this.conf.bossHealthY=this.levelData.bossHealth.y)},create:function(){this.conf.mapName<=3?game.stage.backgroundColor=game.add.tileSprite(0,0,800,640,"background"):4===this.conf.mapName&&(game.stage.backgroundColor=game.add.tileSprite(0,0,3840,640,"backgroundscroll")),this.cursor=game.input.keyboard.createCursorKeys(),game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT]),this.space=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),this.zsqd={up:game.input.keyboard.addKey(Phaser.Keyboard.Z),down:game.input.keyboard.addKey(Phaser.Keyboard.S),left:game.input.keyboard.addKey(Phaser.Keyboard.Q),right:game.input.keyboard.addKey(Phaser.Keyboard.D)},this.createWorld(),"achille"===game.character?this.player=game.add.sprite(this.conf.playerX,this.conf.playerY,"achille"):"ernest"===game.character&&(this.player=game.add.sprite(this.conf.playerX,this.conf.playerY,"ernest")),game.camera.follow(this.player),this.player.anchor.setTo(.5,.5),game.physics.arcade.enable(this.player),this.player.body.gravity.y=1e3,this.player.animations.add("right",[1,2,3,2],8,!0),this.player.animations.add("left",[5,6,7,6],8,!0),this.player.animations.add("jump-right",[8],8,!0),this.player.animations.add("down-right",[9],8,!0),this.player.animations.add("jump-left",[10],8,!0),this.player.animations.add("down-left",[11],8,!0),game.life_points=3,game.direction="right",this.player.body.checkCollision.up=!1,this.player.body.setSize(30,36,5,0),this.health=game.add.sprite(625,20,"health"),this.health.fixedToCamera=!0,this.health.animations.add("5",[0],1,!0),this.health.animations.add("4",[1],1,!0),this.health.animations.add("3",[2],1,!0),this.health.animations.add("2",[3],1,!0),this.health.animations.add("1",[4],1,!0),this.health.animations.add("0",[5],1,!0),this.health.animations.play(game.life_points),3===this.conf.mapName&&(this.boss=game.add.sprite(this.conf.bossX,this.conf.bossY,"boss"),game.physics.arcade.enable(this.boss),this.boss.anchor.setTo(.5,.5),this.boss.animations.add("walk",[0,1],8,!0),this.boss.animations.play("walk"),this.boss.animations.add("hurtAnim",[2,3,4,3,2],10,!0),this.boss.body.gravity.y=1e3,this.boss.body.velocity.x=-100,this.boss.body.bounce.x=1,this.boss.direction="left",this.boss.body.setSize(56,56,0,18),game.boss_life_points=5,this.healthBoss=game.add.sprite(this.conf.bossHealthX,this.conf.bossHealthY,"healthBoss"),this.healthBoss.anchor.setTo(.5,.5),this.healthBoss.animations.add("5",[0],1,!0),this.healthBoss.animations.add("4",[1],1,!0),this.healthBoss.animations.add("3",[2],1,!0),this.healthBoss.animations.add("2",[3],1,!0),this.healthBoss.animations.add("1",[4],1,!0),this.healthBoss.animations.add("0",[5],1,!0),this.healthBoss.animations.play(game.boss_life_points),game.timer_missile=game.time.events.loop(1.5*Phaser.Timer.SECOND,this.fireMissile,this)),this.missiles=game.add.group(),this.missiles.enableBody=!0,this.missiles.createMultiple(10,"missile"),this.missiles.callAll("events.onOutOfBounds.add","events.onOutOfBounds",this.resetMissile),this.missiles.callAll("anchor.setTo","anchor",.5,1),this.missiles.setAll("checkWorldBounds",!0),this.coin=game.add.sprite(this.conf.coinX,this.conf.coinY,"coin"),game.physics.arcade.enable(this.coin),this.coin.anchor.setTo(.5,.5),this.coin.animations.add("turn",[0,1,2,3],8,!0),this.coin.animations.play("turn"),this.coin.scale.setTo(1,1),game.coinCount=0,game.life_points<=3&&(this.potion=game.add.sprite(this.conf.potionX,this.conf.potionY,"potion")),game.physics.arcade.enable(this.potion),this.potion.anchor.setTo(.5,.5),this.scoreLabel=game.add.text(65,17,"Score : 0",{font:fontm,fill:textColor}),this.scoreLabel.fixedToCamera=!0,game.global.score=0,3===this.conf.mapName&&(game.boss_life_pointsLabel=game.add.text(400,170,"Boss",{font:fontxl,fill:textColor}),game.boss_life_pointsLabel.anchor.setTo(.5,.5)),this.enemies=game.add.group(),this.enemies.enableBody=!0;for(var e=0;e<12;e++){switch(game.rnd.integerInRange(0,3)){case 0:case 1:this.enemies.createMultiple(1,"enemy");break;case 2:case 3:this.enemies.createMultiple(1,"enemy2")}}this.nextEnemy=0,this.enemies.callAll("animations.add","animations","walk-left",[0,1,2,1],10),this.enemies.callAll("animations.add","animations","walk-right",[7,6,5,6],10),this.enemies.callAll("animations.add","animations","fall-left",[3],10),this.enemies.callAll("animations.add","animations","fall-right",[4],10),this.jumpSound=game.add.audio("jump"),this.coinSound=game.add.audio("coin"),this.hurtSound=game.add.audio("hurtSound"),this.deadSound=game.add.audio("dead"),this.potionSound=game.add.audio("potion"),this.missileSound=game.add.audio("boom"),this.missileSound.volume=.3,this.bossDieSound=game.add.audio("bossDieSound"),this.bossDieSound.volume=.5,this.bossHurtSound=game.add.audio("bossHurtSound"),this.enemyDieSound=game.add.audio("enemyDieSound"),this.enemyDieSound.volume=.4,this.muteButton=game.add.button(20,20,"mute",this.toggleSound,this),this.muteButton.input.useHandCursor=!0,this.muteButton.fixedToCamera=!0,game.sound.mute&&(this.muteButton.frame=1),this.emitter=game.add.emitter(0,0,15),this.emitter.makeParticles("pixel"),this.emitter.setYSpeed(-200,200),this.emitter.setXSpeed(-200,200),this.emitter.gravity=0,this.emitter.minParticleScale=.5,this.emitter.minRotation=50,this.createWorldForeground(),this.executed=!1,this.hurtAgain=!0,1===this.conf.mapName&&(this.tutoLabel=game.add.text(game.world.centerX,game.world.centerY-150,"Objectif : 100 points",{font:fontm,fill:textColor}),this.tutoLabel.anchor.setTo(.5,.5),game.time.events.add(2e3,this.eraseTuto,this))},update:function(){if(game.physics.arcade.collide(this.player,this.layer),game.physics.arcade.collide(this.enemies,this.layer),game.physics.arcade.collide(this.boss,this.layer),game.physics.arcade.collide(this.player,this.movingWall),game.physics.arcade.overlap(this.player,this.coin,this.takeCoin,null,this),game.physics.arcade.overlap(this.player,this.potion,this.takePotion,null,this),game.physics.arcade.overlap(this.player,this.enemies,this.enemyOrPlayerHurt,null,this),game.physics.arcade.overlap(this.player,this.missiles,this.playerHurt,null,this),game.physics.arcade.overlap(this.player,this.boss,this.bossOrPlayerHurt,null,this),this.movePlayer(),this.moveBoss(),!this.player.inWorld&&this.player.body.y>0&&game.global.score<100&&this.playerDie(),this.nextEnemy<game.time.now){var e=Math.max(4e3-3e3*game.global.score/100,1e3);this.conf.mapName<3&&(this.addEnemy(),this.nextEnemy=game.time.now+e)}this.enemies.forEach(this.animateEnemy),this.movingWall.x>=this.conf.movingWallX+50?this.movingWall.body.velocity.x=-50:this.movingWall.x<=this.conf.movingWallX-50&&(this.movingWall.body.velocity.x=50),0===game.life_points&&this.playerDie()},createWorld:function(){this.map=game.add.tilemap(this.conf.mapName),this.map.addTilesetImage("tileset"),this.layer=this.map.createLayer("Tile Layer 1"),this.layer.resizeWorld(),this.map.setCollisionBetween(1,14),this.movingWall=game.add.sprite(this.conf.movingWallX,this.conf.movingWallY,"wallH"),this.movingWall.anchor.setTo(.5,1),game.physics.arcade.enable(this.movingWall),this.movingWall.enableBody=!0,this.movingWall.body.immovable=!0,this.movingWall.body.velocity.x=50},createWorldForeground:function(){this.layer2=this.map.createLayer("Tile Layer 2"),this.layer2.resizeWorld()},eraseTuto:function(){game.add.tween(this.tutoLabel).to({alpha:0},1e3,"Linear",!0)},movePlayer:function(){this.cursor.left.isDown||this.zsqd.left.isDown?(this.player.body.velocity.x=-200,this.player.animations.play("left"),game.direction="left"):this.cursor.right.isDown||this.zsqd.right.isDown?(this.player.body.velocity.x=200,this.player.animations.play("right"),game.direction="right"):(this.player.body.velocity.x=0,this.player.animations.stop(),"left"===game.direction?this.player.frame=4:this.player.frame=0),(this.cursor.up.isDown||this.space.isDown||this.zsqd.up.isDown)&&(0===this.player.body.velocity.y||this.player.body.onFloor())&&this.player.alive&&(this.player.body.velocity.y=-470,this.jumpSound.play()),(this.cursor.up.isDown&&"right"===game.direction||!this.player.body.onFloor()&&"right"===game.direction&&0!==this.player.body.velocity.y)&&(this.player.animations.play("jump-right"),this.player.body.velocity.y>0&&1===this.player.scale.y?this.player.animations.play("down-right"):0===this.player.body.velocity.y&&0===this.player.body.velocity.x&&(this.player.frame=0)),(this.cursor.up.isDown&&"left"===game.direction||!this.player.body.onFloor()&&"left"===game.direction&&0!==this.player.body.velocity.y)&&(this.player.animations.play("jump-left"),this.player.body.velocity.y>0&&1===this.player.scale.y?this.player.animations.play("down-left"):0===this.player.body.velocity.y&&0===this.player.body.velocity.x&&(this.player.frame=4))},playerHurt:function(e,t){!this.executed&&game.life_points>=1&&game.global.score<100&&(this.executed=!0,game.life_points-=1,this.health.animations.play(game.life_points),this.player.alpha=.5,this.player.tint=16777215,game.tint=game.time.events.loop(100,this.changeTint,this),game.time.events.add(1e3,this.resetTint,this),game.time.events.add(1e3,this.reset_executed,this),game.life_points>=4&&game.time.events.add(1e4,this.updatePotionPosition,this),game.life_points>=1&&this.hurtSound.play())},changeTint:function(){this.player.tint=16711680===this.player.tint?16777215:16711680},resetTint:function(){game.time.events.remove(game.tint),this.player.tint=16777215},reset_executed:function(){this.executed=!1,this.player.alpha=1,this.player.tint=16777215,3===this.conf.mapName&&(this.boss.body.enable=!0,this.boss.animations.play("walk"))},playerDie:function(){if(this.player.alive){this.player.kill(),this.deadSound.play();var e=game.add.text(400,game.world.centerY,"T'es nul...",{font:fontl,fill:textColor});e.fixedToCamera=!0,e.anchor.setTo(.5,.5),game.stage.backgroundColor="#313131",this.emitter.x=this.player.x,this.emitter.y=this.player.y,this.emitter.start(!0,600,null,6),game.time.events.add(1e3,this.restartLevel,this)}},moveBoss:function(){3===this.conf.mapName&&(this.boss.body.velocity.x>0&&"left"===this.boss.direction?(this.boss.scale.x=-1,this.boss.direction="right"):this.boss.body.velocity.x<0&&"right"===this.boss.direction&&(this.boss.scale.x=1,this.boss.direction="left"))},bossHurt:function(){!this.executed&&game.boss_life_points>=0&&(game.boss_life_points-=1,game.time.events.add(1e3,this.reset_executed,this),this.player.body.velocity.y=-200,this.boss.body.enable=!1,this.emitter.x=this.boss.x,this.emitter.y=this.boss.y,this.emitter.start(!0,300,null,6),this.boss.animations.play("hurtAnim"),this.healthBoss.animations.play(game.boss_life_points),game.boss_life_points>=1&&(game.time.events.add(Phaser.Timer.SECOND/4,this.fireMissileUp,this),this.bossHurtSound.play()),0===game.boss_life_points&&this.bossDie())},bossOrPlayerHurt:function(e,t){this.player.body.velocity.y<=0?this.playerHurt(e,t):this.player.body.velocity.y>0&&this.bossHurt()},bossDie:function(){this.bossDieSound.play(),this.boss.kill(),game.boss_life_pointsLabel.kill(),this.healthBoss.kill(),game.time.events.remove(game.timer_missile),this.nextLevelText()},fireMissile:function(){var e=this.missiles.getFirstDead();e&&this.boss.x>this.player.x?(e.reset(this.boss.x-30,this.boss.y+20),e.body.velocity.x=-500,e.scale.x=1,e.angle=0,this.missileSound.play()):e&&this.boss.x<=this.player.x&&(e.scale.x=-1,e.angle=0,e.reset(this.boss.x+30,this.boss.y+20),e.body.velocity.x=500,this.missileSound.play())},fireMissileUp:function(){var e=this.missiles.getFirstDead();e.reset(this.boss.x,this.boss.y),e.body.velocity.y=-500,this.missileSound.play(),1===e.scale.x?e.angle=90:e.angle=-90},resetMissile:function(e){e.kill()},addEnemy:function(){var e=this.enemies.getFirstDead();if(e){e.anchor.setTo(.5,.5),e.reset(game.world.centerX,0),e.body.gravity.y=500,e.body.checkCollision.down=!0,e.body.checkCollision.left=!0,e.body.checkCollision.right=!0,e.body.checkCollision.up=!0,e.angle=0;switch(game.rnd.integerInRange(0,3)){case 0:case 1:e.body.velocity.x=110;break;case 2:case 3:e.body.velocity.x=-110;break;default:e.body.velocity.x=110}e.body.bounce.x=1,e.checkWorldBounds=!0,e.outOfBoundsKill=!0}},animateEnemy:function(e){!e.body.onFloor()&&e.body.velocity.x<=0?e.animations.play("fall-left"):!e.body.onFloor()&&e.body.velocity.x>=0&&e.animations.play("fall-right"),e.body.onFloor()&&e.body.velocity.x<0?e.animations.play("walk-left"):e.body.onFloor()&&e.body.velocity.x>0&&e.animations.play("walk-right")},enemyOrPlayerHurt:function(e,t){!0===this.hurtAgain&&(e.body.velocity.y<=0||e.body.y>=t.body.y?(this.playerHurt(e,t),this.hurtAgain=!1,game.time.events.add(500,this.resetHurtAgain,this)):"enemy2"===t.key&&e.body.velocity.y>0&&(t.body.checkCollision.down=!1,t.body.checkCollision.left=!1,t.body.checkCollision.right=!1,t.body.checkCollision.up=!1,t.body.velocity.x<=0?game.add.tween(t).to({angle:-180},750,Phaser.Easing.Linear.Out,!0):t.body.velocity.x>0&&game.add.tween(t).to({angle:180},750,Phaser.Easing.Linear.Out,!0),this.enemyDieSound.play(),e.body.velocity.y=-200,t.body.velocity.y=-100,this.emitter.x=t.x,this.emitter.y=t.y,this.emitter.start(!0,300,null,6),this.hurtAgain=!1,game.time.events.add(500,this.resetHurtAgain,this)))},resetHurtAgain:function(){this.hurtAgain=!0},takeCoin:function(){this.pointsLabel=game.add.text(this.coin.x,this.coin.y,"10",{font:fontm,fill:textColor}),this.pointsLabel.anchor.setTo(.5,.5),game.time.events.add(500,this.eraseScore,this),game.add.tween(this.pointsLabel).to({y:this.coin.y-50},500,"Linear",!0),game.global.score<90?this.updateCoinPosition():(this.coin.kill(),this.potion.kill()),game.global.score+=10,this.scoreLabel.text="Score : "+game.global.score,this.coinSound.play(),this.coin.scale.setTo(0,0),game.add.tween(this.coin.scale).to({x:1,y:1},300).start(),game.add.tween(this.player.scale).to({x:1.2,y:.8},50).to({x:1,y:1},150).start(),100===game.global.score&&this.nextLevelText()},eraseScore:function(){game.add.tween(this.pointsLabel).to({alpha:0},500,"Linear",!0)},updateCoinPosition:function(){for(var e,t=this.conf.coinPosition,a=t.slice(0),s=0;s<a.length;s++)this.conf.mapName<4&&a[s].x===this.coin.x&&a[s].y===this.coin.y&&(a.splice(s,1),a.splice(0,a[s]));this.conf.mapName<4?e=a[game.rnd.integerInRange(0,a.length-1)]:4===this.conf.mapName&&game.coinCount<9&&(e=a[game.coinCount+=1]),this.coin.reset(e.x,e.y)},takePotion:function(){this.healthBonus=game.add.sprite(this.potion.x,this.potion.y,"healthBonus"),this.healthBonus.anchor.setTo(.5,.5),game.time.events.add(500,this.eraseHealthBonus,this),game.add.tween(this.healthBonus).to({y:this.potion.y-50},500,"Linear",!0),game.add.tween(this.player.scale).to({x:.8,y:1.2},50).to({x:1,y:1},150).start(),this.updatePotionPosition(),game.life_points+=1,this.health.animations.play(game.life_points),this.potionSound.play();var e={x:-100,y:-100};this.potion.reset(e.x,e.y),game.life_points<=4&&game.time.events.add(1e4,this.updatePotionPosition,this)},eraseHealthBonus:function(){game.add.tween(this.healthBonus).to({alpha:0},500,"Linear",!0)},updatePotionPosition:function(){for(var e=this.conf.potionPosition,t=e.slice(0),a=0;a<t.length;a++)t[a].x===this.potion.x&&t.splice(a,1);var s=t[game.rnd.integerInRange(0,t.length-1)];this.potion.reset(s.x,s.y)},startMenu:function(){game.state.start("menu")},nextLevelText:function(){var e;this.conf.mapName<=3?(e=game.add.text(game.world.centerX,game.world.centerY,"Niveau terminé",{font:fontl,fill:textColor}),e.anchor.setTo(.5,.5),game.time.events.add(2e3,this.nextLevelState,this)):4===this.conf.mapName&&(e=game.add.text(400,game.world.centerY,"Jeu terminé ! Bravo !",{font:fontl,fill:textColor}),e.fixedToCamera=!0,e.anchor.setTo(.5,.5),game.time.events.add(2e3,this.startMenu,this))},nextLevelState:function(){game.state.start("play",!0,!1,this.conf.mapName+1)},restartLevel:function(){game.state.start("play",!0,!1,this.conf.mapName)},toggleSound:function(){game.sound.mute=!game.sound.mute,this.muteButton.frame=game.sound.mute?1:0}},game=new Phaser.Game(800,640,Phaser.AUTO,"gameDiv",null,!1),textColor="#ffffff",textFont="VT323",fontxl="50px "+textFont,fontl="30px "+textFont,fontm="25px "+textFont,fonts="20px "+textFont,fontxs="18px "+textFont;WebFontConfig={google:{families:["VT323"]}},game.global={score:0},game.state.add("boot",bootState),game.state.add("load",loadState),game.state.add("menu",menuState),game.state.add("character",characterState),game.state.add("play",playState),game.state.start("boot");