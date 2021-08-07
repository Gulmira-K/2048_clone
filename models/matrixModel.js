function MatrixModel() {
    BaseModel.call(this);

    this.generalSize = 4;

    this.attributes = {
       
        grid: Array(this.generalSize).fill([]).map(function () {
            return Array(this.generalSize).fill('');
        }, this)
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }

    this.displayDigitByKeyPress();
}


MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.randomPlace = function (min, max) {
    if (min && max) {
        return Math.floor(Math.random() * (max - min + 1)) + 1;
    }
    return Math.floor(Math.random() * this.generalSize);
}

MatrixModel.prototype.randomNumber = function () {
    return Math.random() < 0.8 ? '2' : '4';
}

MatrixModel.prototype.displayDigitByKeyPress = function (code) {
    this.attributes.grid[this.randomPlace()][this.randomPlace(0, 1)] = this.randomNumber();
    this.attributes.grid[this.randomPlace()][this.randomPlace(2, 3)] = this.randomNumber();

    this.publish('changeData');
}

MatrixModel.prototype.startNewGame = function () {
    console.log('startNewGame');
}

// ['2', '', '4', ''] => ['', '', '2', '4']