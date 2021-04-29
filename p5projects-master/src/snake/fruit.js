class Fruit {

    constructor() {
        this.x = floor(random(0, width) / gap) * gap;
        this.y = floor(random(0, height) / gap) * gap;
    }

    eat() {

        this.x = floor(random(0, width) / gap) * gap;
        this.y = floor(random(0, height) / gap) * gap;

        if (this.x == snake.x || this.y == snake.y) {
            this.eat();
        }
    }

    show() {
        fill(220, 0, 0);
        // rect(this.x, this.y, gap, gap, 4);
        circle(this.x + 20, this.y + 20, 35);

    }

}