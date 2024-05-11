// HOF
// Callback


// Program 1:

function jack(x) {

}

function sparrow(x) {

}

sparrow(jack)

// callback -> jack
// hof -> sparrow


// Program 2

function add() {

}

function subtract() {

}

function mutiple() {

}

function divide() {

}

divide(mutiple) // hof -> divide callback -> multiple
add(subtract) // callback -> subtract hof -> add

