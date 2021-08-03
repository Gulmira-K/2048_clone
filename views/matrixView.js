function MatrixView() {
  this.matrixModel = new MatrixModel();
  this.template = document.getElementById('matrixTemplate').innerHTML;
}

MatrixView.prototype.render = function () {
  let i, j, attributes = this.matrixModel.attributes, str = '';

  for (i = 0; i < 4; i += 1) {
    str += '<div class="row">';

    for (j = 0; j < 4; j += 1) {
      str += `<div class="cell appear-${attributes.grid[i][j]}">${attributes.grid[i][j]}</div>`
    }

    str += '</div>'
  }

  return this.template.replace('{{matrix}}', str)
}
