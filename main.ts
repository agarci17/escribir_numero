function escribe_numero (núm: number) {
    if (núm == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    if (núm == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (núm == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (núm == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (núm == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (núm == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (núm == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (núm == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # . . .
            `)
    }
    if (núm == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (núm == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (núm == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (núm == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    }
    if (núm == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (núm == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . . . #
            # . # # #
            `)
    }
    if (núm == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (núm == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (núm == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.clearScreen()
        basic.pause(100)
        escribe_numero(numero)
        basic.pause(100)
    }
})
let numero = 0
makerbit.connectSerialMp3(DigitalPin.P0, DigitalPin.P1)
numero = 0
escribe_numero(numero)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Heart)
        } else {
            numero += -1
            escribe_numero(numero)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Square)
        } else {
            numero += 1
            escribe_numero(numero)
        }
    }
})
