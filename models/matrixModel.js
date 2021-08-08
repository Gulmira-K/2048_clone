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

    this.initGame();
}


MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.randomPlace = function (min, max) {
    if (!min && !max) {
        return Math.floor(Math.random() * this.generalSize);
    }
    
    return Math.floor(Math.random() * (max - min) + min);
}

MatrixModel.prototype.randomNumber = function () {
    return Math.random() < 0.8 ? '2' : '4';
}

MatrixModel.prototype.initGame = function () {
    this.attributes.grid[this.randomPlace()][this.randomPlace(0, this.generalSize / 2.5)] = this.randomNumber();
    this.attributes.grid[this.randomPlace()][this.randomPlace(this.generalSize / 2 , this.generalSize )] = this.randomNumber();

    this.publish('changeData');
}

MatrixModel.prototype.displayDigitByKeyPress = function (code) {
    switch (code) {
        case 'ArrowRight':
            this.moveToRight();
            break;
        case 'ArrowLeft':
            this.moveToLeft();
            break;
        case 'ArrowUp':
            console.log('up')
            break;
        case 'ArrowDown':
            console.log('down')
        break;
    }

    this.attributes.grid[this.randomPlace()][this.randomPlace()] = this.randomNumber();
    this.attributes.grid[this.randomPlace()][this.randomPlace()] = this.randomNumber();
  
    this.publish('changeData');
}

MatrixModel.prototype.moveToRight = function () {
    this.attributes.grid.map(function (array) {
        return array.map(function (elem, i) {
            if (elem !== '') {
                let newIndex = i + 1;
                return array.splice(newIndex, 0, array.splice(i, 1)[0]);
           }
        }) 
    })
}

MatrixModel.prototype.moveToLeft = function () {
    this.attributes.grid.map(function (array) {
        return array.map(function (elem, i) {
            if (elem !== '') {
                let newIndex = i - 1;
                return array.splice(newIndex, 0, array.splice(i, 1)[0])
           }
        }) 
    })
}

MatrixModel.prototype.startNewGame = function () {
    console.log('startNewGame');
}

// ['2', '', '4', ''] => ['', '', '2', '4']