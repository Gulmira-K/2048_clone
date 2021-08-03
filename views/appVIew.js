function AppView() {
    var summaryView = new SummaryView();
    var matrixView = new MatrixView();

    this.render = function (selector) {
        var element = document.getElementById(selector);
        element.innerHTML = summaryView.render();
        element.innerHTML = matrixView.render();
    }
}

var appView = new AppView();
appView.render('root');