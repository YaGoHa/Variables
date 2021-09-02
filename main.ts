input.onButtonPressed(Button.AB, function () {
    Pasos = 0
    Pantalla_Derecha = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
    basic.showNumber(Pasos)
})
input.onGesture(Gesture.TiltRight, function () {
    Pantalla_Derecha += 2
    basic.showNumber(Pantalla_Derecha)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Presionar = 3
    basic.showNumber(Presionar)
})
let Presionar = 0
let Pantalla_Derecha = 0
let Pasos = 0
Pasos = 0
basic.forever(function () {
	
})
