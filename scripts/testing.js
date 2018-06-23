function markQuestion() {
}
function nextQuestion() {
}
function previousQuestion() {
}
function goToQuestion(number) {
}
function endTest() {
}
var form = document.getElementsByTagName("form")[0];
var navigation = document.getElementById("nav-buttons");
var buttons = navigation.getElementsByTagName("button");
var _loop_1 = function (i) {
    var questionNumber = +buttons[i].getAttribute("question");
    if (questionNumber === NaN)
        return "continue";
    buttons[i].onclick = function () {
        goToQuestion(questionNumber);
    };
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
