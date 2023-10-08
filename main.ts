input.onButtonPressed(Button.A, function () {
    Ship += -1
    if (Ship < 0) {
        Ship = 0
    }
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
        led.plot(Index3, Ship)
    }
}
function mkStars () {
    for (let index = 0; index <= 4; index++) {
        if (7 < randint(0, 10)) {
            led.plotBrightness(4, index, randint(25, 100))
        } else {
            led.plotBrightness(4, index, 0)
        }
    }
}
function mvStars () {
    for (let index = 0; index <= 3; index++) {
        for (let Index2 = 0; Index2 <= 4; Index2++) {
            led.plotBrightness(index, Index2, led.pointBrightness(1 + index, Index2))
        }
    }
}
let Ship = 0
Ship = 2
basic.forever(function () {
    led.plot(0, Ship)
    basic.pause(100)
    mvStars()
    mkStars()
})
