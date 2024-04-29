basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(500)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                `)
            basic.pause(500)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            basic.pause(500)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
