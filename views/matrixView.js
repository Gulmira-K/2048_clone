function MatrixView() {
    this.matrixModel = new MatrixModel();
    this.controller = new Controller();
    this.template = document.getElementById('matrixTemplate').innerHTML;
    this.className = 'table';
    BaseView.call(this);
}

MatrixView.prototype = Object.create(BaseView.prototype);
MatrixView.prototype.constructor = MatrixView;

MatrixView.prototype.beforeRender = function () {
    this.matrixModel.subscribe('changeData', this.reRender, this);
};

MatrixView.prototype.render = function () {
  let
    i,
    j,
    attributes = this.matrixModel.attributes,
    rowLength = attributes.grid.length,
    columnLength = attributes.grid[0].length,
    str = '';

  for (i = 0; i < rowLength; i += 1) {
    str += '<div class="row">';

    for (j = 0; j < columnLength; j += 1) {
      str += `<div class="cell appear-${attributes.grid[i][j]}">${attributes.grid[i][j]}</div>`
    }

    str += '</div>'
  }

  return this.template.replace('{{matrix}}', str)
}


MatrixView.prototype.afterRender = function () {
    window.onkeydown = this.controller.onKeyPress.bind(this);
    var newGameButton = document.getElementById('newGameBtn');
    newGameButton.addEventListener('click', this.controller.onClickNewGame.bind(this));
};