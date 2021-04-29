function Button() {
    button = createButton('Slow')
    button2 = createButton('Normal')
    button3 = createButton('Fast')
    button4 = createButton('Good Luck')

    button.position(700, 100)
    button2.position(700, 125)
    button3.position(700, 150)
    button4.position(700, 175)

    button.mousePressed(slow);
    button2.mousePressed(normal);
    button3.mousePressed(fast);
    button4.mousePressed(goodluck);
}

function slow() {
    frameRate(8)
    snake.redefine()
}

function normal() {
    frameRate(12)
    snake.redefine()
}

function fast() {
    frameRate(16)
    snake.redefine()
}

function goodluck() {
    frameRate(30)
    snake.redefine()
}