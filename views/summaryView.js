function SummaryView() {
  this.template = document.getElementById('summaryTemplate').innerHTML;
}

SummaryView.prototype.render = function () {
  var root = document.getElementById('root')
  root.innerHTML = this.template;
}

const summaryView = new SummaryView;
summaryView.render()