function SummaryModel() {
    this.attributes = {
        totalScore: 0,
        bestScore: 0
    }

    var instance = this;
    SummaryModel = function () {
        return instance;
    }
}