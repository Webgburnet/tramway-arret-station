radio.setGroup(240)
grove.lcd_init()
grove.lcd_clear()
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) <= 12) {
        radio.sendString("B")
        grove.lcd_show_string("Trame en gare ", 0, 0)
    } else {
        grove.lcd_clear()
    }
})
