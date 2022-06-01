namespace SpriteKind {
    export const notreallythere = SpriteKind.create()
}
function changeScore (numbah: number) {
    scor += numbah
    textSprite.setText(convertToText(scor))
    pause(1000)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    changeScore(2)
})
function controls () {
    if (controller.up.isPressed()) {
        Malkovitch.setVelocity(0, -30)
    }
    if (controller.down.isPressed()) {
        Malkovitch.setVelocity(0, 30)
    }
    if (controller.left.isPressed()) {
        Malkovitch.setVelocity(-30, 0)
    }
    if (controller.right.isPressed()) {
        Malkovitch.setVelocity(30, 0)
    }
    if (controller.up.isPressed() && controller.left.isPressed()) {
        Malkovitch.setVelocity(-30, -30)
    }
    if (controller.up.isPressed() && controller.right.isPressed()) {
        Malkovitch.setVelocity(30, -30)
    }
    if (controller.down.isPressed() && controller.right.isPressed()) {
        Malkovitch.setVelocity(30, 30)
    }
    if (controller.down.isPressed() && controller.left.isPressed()) {
        Malkovitch.setVelocity(-30, 30)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    changeScore(-1)
})
let Malkovitch: Sprite = null
let textSprite: TextSprite = null
let scor = 0
tiles.setCurrentTilemap(tilemap`level2`)
let textSprite3 = textsprite.create("Collect")
textSprite3.setPosition(70, 80)
pause(2000)
tiles.setCurrentTilemap(tilemap`level3`)
pause(2000)
tiles.setCurrentTilemap(tilemap`level5`)
pause(2000)
tiles.setCurrentTilemap(tilemap`level6`)
textSprite3.setText("")
let textSprite2 = textsprite.create("avoid")
textSprite2.setPosition(70, 80)
pause(2000)
tiles.setCurrentTilemap(tilemap`level7`)
scor = 0
textSprite = textsprite.create(convertToText(scor))
textSprite.setPosition(145, 4)
scene.setBackgroundColor(10)
Malkovitch = sprites.create(assets.image`Malkovich`, SpriteKind.Player)
Malkovitch.setPosition(80, 85)
Malkovitch.setBounceOnWall(true)
let scary_monster = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 f f f f f f 2 f f f f f f 2 2 
    2 f f 2 2 2 f f f 2 2 2 f f 2 2 
    2 2 2 . . . 2 2 2 . . . 2 2 2 2 
    2 2 2 . . . 2 2 2 2 . . 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 f f f f f 2 2 2 2 2 
    2 2 2 f f f f f f f f f f 2 2 2 
    2 2 f f f f f f f f f f f f 2 2 
    2 2 f f f f f f f f f f f f 2 2 
    2 2 f f f f f f f f f f f f 2 2 
    2 2 2 f f f f f f f f f f 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
scary_monster.setBounceOnWall(true)
let yikes = sprites.create(img`
    6 6 6 6 4 4 4 4 8 8 8 8 8 8 8 8 
    6 6 6 4 4 4 4 8 8 8 8 8 8 8 8 9 
    6 6 4 4 4 4 8 8 8 8 8 8 8 8 9 9 
    6 4 4 4 4 8 8 8 8 8 8 8 8 9 9 9 
    4 4 4 4 2 2 2 2 8 8 2 2 2 2 9 9 
    4 4 4 8 2 2 2 2 8 8 2 2 2 2 9 9 
    4 4 8 8 2 2 2 2 8 8 2 2 2 2 9 9 
    4 8 8 8 2 2 2 2 8 9 2 2 2 2 9 a 
    8 8 8 8 8 8 8 8 9 9 9 9 9 9 a a 
    8 8 8 8 8 8 8 9 9 9 9 9 9 a a a 
    8 8 8 8 8 8 9 9 9 9 9 9 a a a a 
    8 8 8 8 8 9 9 9 9 9 9 a a a a a 
    8 8 8 8 9 9 9 9 9 9 a a a a a 7 
    8 8 8 9 9 9 9 9 9 a a a a a 7 7 
    8 8 9 9 9 9 9 9 a a a a a 7 7 7 
    8 9 9 9 9 9 9 a a a a a 7 7 7 7 
    `, SpriteKind.Enemy)
scary_monster.setPosition(0, 0)
scary_monster.setVelocity(30, 30)
yikes.setPosition(0, 60)
let projectyle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . 2 2 2 4 4 2 2 2 2 2 . . . 
    2 2 2 2 2 . 4 . 2 2 2 2 2 . . . 
    2 4 2 . 4 4 4 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 . 2 2 2 2 2 2 2 2 . . 
    2 4 . 2 4 2 2 2 2 4 . 2 2 2 . . 
    . 2 2 2 . 2 2 2 2 2 2 4 4 4 . . 
    2 4 2 2 2 2 2 2 2 2 2 4 2 2 . . 
    . . 2 2 2 2 2 2 2 4 2 . 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
projectyle.setPosition(0, 120)
projectyle.startEffect(effects.fire)
let coin = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 1 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    `, SpriteKind.Food)
coin.setPosition(randint(0, 160), randint(0, 120))
let coin2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let COIN3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
let Malkovitch2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.notreallythere)
forever(function () {
    if (controller.A.isPressed()) {
        Malkovitch2 = sprites.create(img`
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . f c c c c c c c c d d f . . 
            . . f d 8 d d d 8 d d d d f . . 
            . . f d d d d d d d d d d f . . 
            . . f d f f f f f 1 1 1 1 f . . 
            . . f 1 f 1 1 1 f 1 1 1 f f . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            `, SpriteKind.notreallythere)
        Malkovitch2.setPosition(Malkovitch.x, Malkovitch.y)
        Malkovitch2.setVelocity(Malkovitch.vx, Malkovitch.vy)
        Malkovitch2.setBounceOnWall(true)
        Malkovitch.destroy()
        pause(850)
        Malkovitch = sprites.create(assets.image`Malkovich`, SpriteKind.Player)
        Malkovitch.setPosition(Malkovitch2.x, Malkovitch2.y)
        Malkovitch.setBounceOnWall(true)
        Malkovitch2.destroy()
        pause(2500)
    }
})
forever(function () {
    if (Malkovitch.vx > 31 || Malkovitch.vx < -31) {
        pause(1000)
        Malkovitch.setVelocity(27, 10)
    } else if (Malkovitch.overlapsWith(COIN3)) {
        Malkovitch.setVelocity(0, -15)
    } else {
        controls()
    }
})
forever(function () {
    if (Malkovitch.overlapsWith(coin)) {
        coin.destroy()
        coin2 = sprites.create(img`
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 1 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            `, SpriteKind.Food)
        coin2.setPosition(randint(0, 160), randint(0, 120))
        coin2.setVelocity(-52, 0)
        pause(2800)
        coin2.setVelocity(10, -69)
        coin2.setBounceOnWall(true)
    }
    if (Malkovitch.overlapsWith(coin2)) {
        coin2.destroy()
        pause(8000)
        COIN3 = sprites.create(img`
            . . . c c c c c c c c c c . . . 
            . . c c c c c c c c c c c c . . 
            . c c c c c 4 4 c c c c c c c . 
            c c 4 4 c c c c c c c c c c c c 
            c c 4 c c c c 4 4 c c c c c c c 
            c c 4 c c c c c c c c c c c c c 
            c c 4 c c c c c c c c 4 c c c c 
            c c 4 c c c c c c 4 c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c 4 c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            . c c c c c c c c c c c c c c . 
            . . c c c c c c c c c c c c . . 
            . . . c c c c c c c c c c . . . 
            `, SpriteKind.Food)
        COIN3.follow(scary_monster)
        pause(2000)
        COIN3.follow(yikes)
        pause(2000)
        COIN3.follow(projectyle)
        pause(2000)
        COIN3.follow(scary_monster)
        pause(700)
        COIN3.follow(projectile)
    }
    if (Malkovitch.overlapsWith(COIN3) && scor >= 6) {
        textSprite2 = textsprite.create("Victory Royale!")
        textSprite2.setPosition(60, 51)
        COIN3.destroy()
        Malkovitch.setVelocity(0, -21)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 750)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.fire, 500)
        pause(2000)
        game.over(true, effects.confetti)
    }
    if (Malkovitch.overlapsWith(COIN3) && scor > 3) {
        COIN3.destroy()
        Malkovitch.setVelocity(0, -21)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 750)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.fire, 600)
        pause(2000)
        game.over(true, effects.confetti)
    } else if (Malkovitch.overlapsWith(COIN3)) {
        COIN3.destroy()
        scary_monster.follow(Malkovitch)
        pause(700)
        game.over(true, effects.dissolve)
    }
})
forever(function () {
    if (Malkovitch.overlapsWith(yikes)) {
        Malkovitch.setVelocity(100, 100)
    }
    if (Malkovitch.overlapsWith(projectyle)) {
        Malkovitch.setVelocity(randint(-100, 100), -27)
    }
    if (Malkovitch.overlapsWith(scary_monster)) {
        Malkovitch.setVelocity(randint(-100, 100), randint(-100, 100))
        Malkovitch.destroy(effects.ashes, 8000)
        Malkovitch.sayText("@#$%!")
        Malkovitch.setBounceOnWall(false)
        pause(1000)
        game.over(false, effects.slash)
        game.reset()
    }
    if (Malkovitch.overlapsWith(projectile)) {
        Malkovitch.setPosition(randint(0, 160), randint(0, 120))
        scene.cameraShake(4, 1000)
    }
})
forever(function () {
    projectile = sprites.create(img`
        . f f f . f . f . f . f . f . f 
        f . f . f f f . f . f . f . f . 
        . f . f . f . f . f . f . f . f 
        f . f . f f f . f . f f f . f . 
        . f . f . f . f . f a f . f . f 
        f . f . f f f . f . f . f . f . 
        f f f f f f f f f f f f f f f f 
        f . f . f f f f f . f . f . f . 
        . f . f . f . f . f . f . f . f 
        f . f . f f f . f . f . f f f . 
        . f . f f f . f . f . f f f . f 
        f . f . f f f . f . f . f . f . 
        . f . f . f . f . f f f . f . f 
        f . f . f f f . f . f . f . f . 
        . f . f f f . f . f . f . f . f 
        f . f . f f f f f . f . f . f . 
        `, SpriteKind.Projectile)
    projectile.setPosition(0, 51)
    projectile.setVelocity(100, 0)
    projectile.setBounceOnWall(true)
    projectyle.setVelocity(100, -50)
    pause(1000)
    yikes.setPosition(0, randint(0, 120))
    yikes.setVelocity(100, randint(-10, 10))
    pause(1000)
    projectyle.setPosition(0, randint(18, 113))
    projectyle.setVelocity(100, -3)
    pause(800)
    yikes.setPosition(0, randint(0, 50))
    yikes.setVelocity(94, -8)
    pause(2000)
    yikes.setVelocity(100, 20)
})
forever(function () {
    music.playMelody("C - C - D D E C ", 500)
    music.playMelody("C F D C E D F G ", 500)
    music.playMelody("A - F A - E G F ", 500)
    music.playMelody("C C G E - D G G ", 500)
    music.playMelody("C5 - C5 G A F D G ", 500)
    music.playMelody("- - F F A F D F ", 500)
    music.playMelody("C5 A F D C D F D ", 500)
    music.playMelody("F G F C B F G E ", 500)
    music.playMelody("D B - C C5 F - F ", 500)
    music.playMelody("A B F G E F - C5 ", 500)
    music.playMelody("C5 - B C D C D C ", 500)
    music.playMelody("D C D E D G B C ", 500)
    music.playMelody("D C F D A C5 B G ", 500)
    music.playMelody("C E D A E F D D ", 500)
    music.playMelody("- F F E F F E A ", 500)
    music.playMelody("C5 D B C D - D F ", 500)
    music.playMelody("G F D A G B C5 F ", 500)
    music.playMelody("G - G - F A C5 E ", 500)
    music.playMelody("C C5 C C5 C C5 F - ", 500)
    music.playMelody("- F A - A F - E ", 500)
    music.playMelody("C E C - C - G F ", 500)
    music.playMelody("G - G - G F C5 F ", 500)
    music.playMelody("E - F D C F G C ", 500)
    music.playMelody("E G D E - E D G ", 500)
})
