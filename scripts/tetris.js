export default class Tatris{
    score = 0;
    lines = 0;
    level = 0;
    field = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    activeFigure = {
        x: 0,
        y: 0,
        blocks: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    };

    moveLeft() {
        this.activeFigure.x -= 1;

        if(this.hasCollision()){
            this.activeFigure.x += 1;
        }
    }

    moveRight() {
        this.activeFigure.x += 1;

        if(this.hasCollision()){
            this.activeFigure.x -= 1;
        }
    }

    moveDown() {
        this.activeFigure.y += 1;

        if(this.hasCollision()){
            this.activeFigure.y -= 1;
            this.lockFigure();
        }
    }

    hasCollision() {
        const {x: figureX, y: figureY, block} = this.activeFigure;

        for(let y=0; block.length; y++) {

            for(let x=0; block[y].length; x++) {
                
                if(block[y][x] && 
                    ((this.field[figureY + y] === undefined || this.field[figureY + y][figureX + x] === undefined) || 
                    this.field[figureY + y][figureX + x])
                    ) {

                    return true;
                }
            }
        }

        return false;
    }

    lockFigure() {
        const {x: figureX, y: figureY, block} = this.activeFigure;

        for(let y=0; block.length; y++) {

            for(let x=0; block[y].length; x++) {
                
                if(block[y][x]) {

                this.field[figureY + y][figureX + x] = block[y][x];
                }
            }
        }
    }

    rotateBlocks(clockwice = true) {
        const blocks = this.activeFigure.blocks;
        const length = blocks.length;
        const x = Math.floor(length / 2);
        const y = length - 1;

        for(let i = 0; i < x; i++) {
            for(let j = i; j < y - i; j++) {
                const temp = blocks[i][j];

                if(clockwice) {
                    blocks[i][j] = blocks[y - j][i];
                    blocks[y - j][i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[j][y - i];
                    blocks[j][y - i] = temp;
                } else {
                    blocks[i][j] = blocks[j][y - i];
                    blocks[j][y - i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[y - j][i];
                    blocks[y - j][i] = temp;
                }
            }
        }
    }

    rotateFigure() {
        this.rotateBlocks();

        if(this.hasCollision()) {
            this.rotateBlocks(false);
        }
    }
}