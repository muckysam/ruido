input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("G F E D F G A B ", 340)
    basic.showString("no me toques")
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G F E D D D D - ", 340)
})
input.onButtonPressed(Button.AB, function () {
    voces = 0
    basic.showNumber(voces)
})
let voces = 0
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
}
basic.clearScreen()
basic.showNumber(input.temperature())
basic.pause(1000)
voces = 0
music.setVolume(255)
basic.showNumber(voces)
basic.forever(function () {
    if (input.soundLevel() > 110) {
        voces = voces + 1
        music.playMelody("F E D C C C C C ", 145)
        basic.showString("llevas ")
        basic.showNumber(voces)
        basic.showString("voces")
        basic.showNumber(voces)
        basic.pause(1000)
        if (voces == 5) {
            basic.clearScreen()
            for (let index = 0; index < 10; index++) {
                music.playMelody("C5 C5 C5 C C C C C ", 340)
            }
            basic.showString("castigado sin tele")
        }
    }
})
