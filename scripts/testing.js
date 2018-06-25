function getCurrentQuestionNumber() {
    var currentQuestion = document.querySelector(".right-column .question.selected");
    var currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    if (currentQuestion === null || currentQuestionButton === null)
        return undefined;
    return +currentQuestion.getAttribute("question");
}
function getCurrentQuestionButton() {
    var currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    return currentQuestionButton;
}
function getCurrentQuestionFrame() {
    var currentQuestion = document.querySelector(".right-column .question.selected");
    return currentQuestion;
}
function isNull(variable) {
    if (variable === null || variable === NaN || variable === undefined) {
        return true;
    }
    return false;
}
function addWaveEffects(element) {
    element.classList.add("waves-effect");
    element.classList.add("waves-light");
}
function checkAnswered() {
    var currentQuestion = getCurrentQuestionFrame();
    var inputs = currentQuestion.querySelectorAll("input");
    var answered = false;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            answered = true;
            break;
        }
    }
    if (!answered) {
        return;
    }
    var currentQuestionButton = getCurrentQuestionButton();
    currentQuestionButton.classList.add("answered");
}
function markQuestion() {
    var currentQuestionButton = getCurrentQuestionButton();
    if (currentQuestionButton.classList.contains("marked")) {
        currentQuestionButton.classList.remove("marked");
    }
    else {
        currentQuestionButton.classList.add("marked");
    }
    checkMark();
}
function checkMark() {
    var currentQuestionButton = getCurrentQuestionButton();
    var markButton = document.getElementById("mark-question");
    if (currentQuestionButton.classList.contains("marked")) {
        markButton.innerText = "Снять флажок";
    }
    else {
        markButton.innerText = "Отметить флажком";
    }
}
function nextQuestion() {
    var currentQuestion = getCurrentQuestionNumber();
    goToQuestion(currentQuestion + 1);
}
function previousQuestion() {
    var currentQuestion = getCurrentQuestionNumber();
    goToQuestion(currentQuestion - 1);
}
function goToQuestion(number) {
    var currentQuestion = document.querySelector(".right-column .question.selected");
    var currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    var newQuestion = document.querySelector(".right-column .question[question='" + number + "']");
    var newQuestionButton = document.querySelector(".left-column .select-button[question='" + number + "']");
    if (newQuestion === null || currentQuestion === null
        || currentQuestionButton === null || newQuestionButton === null)
        return;
    checkAnswered();
    currentQuestion.classList.remove("selected");
    currentQuestionButton.classList.remove("selected");
    newQuestion.classList.add("selected");
    newQuestionButton.classList.add("selected");
    checkMark();
}
function endTest() {
    var form = document.getElementsByTagName("form")[0];
    var confirmation = confirm("Отправить результаты на проверку?");
    if (confirmation) {
        form.submit();
    }
}
function onLoad() {
    var markButton = document.getElementById("mark-question");
    markButton.onclick = markQuestion;
    var prevButton = document.getElementById("prev-question");
    var nextButton = document.getElementById("next-question");
    prevButton.onclick = previousQuestion;
    nextButton.onclick = nextQuestion;
    addWaveEffects(nextButton);
    addWaveEffects(prevButton);
    var buttons = document.querySelectorAll(".left-column nav .select-button");
    var _loop_1 = function (i) {
        var questionNumber = +buttons[i].getAttribute("question");
        if (isNull(questionNumber))
            return "continue";
        buttons[i].onclick = function () {
            goToQuestion(questionNumber);
        };
        buttons[i].classList.add("waves-effect");
        buttons[i].classList.add("waves-teal");
    };
    for (var i = 0; i < buttons.length; i++) {
        _loop_1(i);
    }
    var endTestButton = document.querySelector(".left-column .submit-button");
    endTestButton.onclick = endTest;
    var timer = document.querySelector(".left-column .timer .time-left");
    var time = 60 * 60;
    setTimeout(function timerTick() {
        time--;
        var minutes = Math.floor(time / 60);
        var seconds = (time - +minutes * 60) % 60;
        var formatter = new Intl.NumberFormat("ru", {
            minimumIntegerDigits: 2
        });
        timer.innerText = "" + minutes + ":" + formatter.format(seconds);
        if (time > 0) {
            setTimeout(timerTick, 1000);
        }
        else {
            alert("Время вышло!");
            var form = document.getElementsByTagName("form")[0];
            form.submit();
        }
    }, 1000);
}
document.addEventListener("DOMContentLoaded", onLoad);
