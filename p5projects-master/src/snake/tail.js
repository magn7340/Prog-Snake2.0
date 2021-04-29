class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {

        fill(43, 51, 100);
        // rect(this.x, this.y, gap, gap, 4);
        circle(this.x + 20, this.y + 20, 40);
    }
}