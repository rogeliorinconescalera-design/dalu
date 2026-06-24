input.onButtonPressed(Button.A, function () {
    pasos = 0
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("rogelio genesis valeria.Q")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
let pasos = 0
pasos = 0
basic.forever(function () {
    basic.showNumber(pasos)
})
