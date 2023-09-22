class Square {
    constructor(public color: number,
        public number: number,
        public shape: number) { }
}

function isGoodAttr(attr: number[]) {
    attr.sort();

    // all the same
    if (attr[0] === attr[1] && attr[1] === attr[2] && attr[2] === attr[3]) {
        return true;
    }

    // all different
    if (attr[0] !== attr[1] && attr[1] !== attr[2] && attr[2] !== attr[3]) {
        return true;
    }

    // half and half
    if (attr[0] === attr[1] && attr[2] === attr[3]) {
        return true;
    }

    return false;
}

function isQuad(squares: Square[]): boolean {
    const colors = squares.map(s => s.color);
    const numbers = squares.map(s => s.number);
    const shapes = squares.map(s => s.shape);

    return isGoodAttr(colors) && isGoodAttr(numbers) && isGoodAttr(shapes);
}

const RED = 1;
const YELLOW = 2;
const GREEN = 3;
const BLUE = 4;

const SQUARE = 1;
const CIRCLE = 2;
const HEART = 3;
const TRIANGLE = 4;
const squares = [
    new Square(RED, 1, SQUARE),
    new Square(YELLOW, 3, CIRCLE),
    new Square(GREEN, 3, HEART),
    new Square(RED, 2, CIRCLE),
    new Square(GREEN, 4, SQUARE),
    new Square(BLUE, 1, TRIANGLE),
    new Square(GREEN, 4, TRIANGLE),
    new Square(BLUE, 2, HEART),
]

// find all quads
const quads: Square[][] = [];
for (let i = 0; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
        for (let k = j + 1; k < squares.length; k++) {
            for (let l = k + 1; l < squares.length; l++) {
                const quad = [squares[i], squares[j], squares[k], squares[l]];
                if (isQuad(quad)) {
                    quads.push(quad);
                }
            }
        }
    }
}

console.log(quads);