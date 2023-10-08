input.onButtonPressed(Button.A, function () {
    Ship += -1
    if (Ship < 0) {
        Ship = 0
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    speed = speed / 1.25
})
input.onButtonPressed(Button.AB, function () {
    Laser()
})
input.onButtonPressed(Button.B, function () {
    Ship += 1
    if (Ship > 4) {
        Ship = 4
    }
})
function Laser () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    for (let Index3 = 0; Index3 <= 4; Index3++) {
        if (led.pointBrightness(Index3, Ship) == 200) {
            game.addScore(randint(5, 25))
        }
        led.plot(Index3, Ship)
    }
}
function mkStars () {
    for (let index = 0; index <= 4; index++) {
        if (7 < randint(0, 10)) {
            if (!(docked)) {
                if (7 > randint(0, 10)) {
                    led.plotBrightness(4, index, randint(25, 50))
                } else {
                    led.plotBrightness(4, index, 200)
                }
            }
        } else {
            led.plotBrightness(4, index, 0)
        }
    }
}
input.onGesture(Gesture.TiltRight, function () {
    speed = speed * 1.25
})
function mvStars () {
    for (let index = 0; index <= 3; index++) {
        for (let Index2 = 0; Index2 <= 4; Index2++) {
            led.plotBrightness(index, Index2, led.pointBrightness(1 + index, Index2))
        }
    }
}
let station = 0
let docked = false
let speed = 0
let Ship = 0
game.setLife(5)
Ship = 2
speed = 1
docked = false
basic.forever(function () {
    if (led.pointBrightness(0, Ship) == 200) {
        game.removeLife(1)
    }
    if (led.pointBrightness(0, Ship) == 240) {
        game.setLife(5)
    }
    led.plot(0, Ship)
    basic.pause(150 / speed)
    mvStars()
    mkStars()
})
basic.forever(function () {
    basic.pause(randint(3, 10) * 1000)
    docked = true
    station = randint(0, 2)
    for (let index = 0; index <= 2; index++) {
        led.plotBrightness(4, index + station, 240)
    }
})
