function getCurrentQuestionNumber() : number {
    let currentQuestion = document.querySelector(".right-column .question.selected");
    let currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    if (currentQuestion === null || currentQuestionButton === null)
        return undefined;

    return +currentQuestion.getAttribute("question");
}

function getCurrentQuestionButton() : Element {
    let currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    return currentQuestionButton;
}

function getCurrentQuestionFrame() : Element {
    let currentQuestion = document.querySelector(".right-column .question.selected");
    return currentQuestion;
}

function isNull(variable : any) : Boolean {
    if (variable === null || variable === NaN || variable === undefined) {
        return true;
    }
    return false;
}

function addWaveEffects(element : Element) {
    element.classList.add("waves-effect");
    element.classList.add("waves-light");
}

function checkAnswered() {
    let currentQuestion = getCurrentQuestionFrame();
    let inputs = currentQuestion.querySelectorAll("input");

    let answered = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            answered = true;
            break;
        }
    }
    if (!answered) {
        return;
    }

    let currentQuestionButton = getCurrentQuestionButton();
    currentQuestionButton.classList.add("answered");
}

function markQuestion() {
    let currentQuestionButton = getCurrentQuestionButton();

    if (currentQuestionButton.classList.contains("marked")) {
        currentQuestionButton.classList.remove("marked");
    }
    else {
        currentQuestionButton.classList.add("marked");
    }
    checkMark();
}

function checkMark() {
    let currentQuestionButton = getCurrentQuestionButton();
    let markButton = document.getElementById("mark-question");

    if (currentQuestionButton.classList.contains("marked")) {
        markButton.innerText = "Снять флажок";
    }
    else {
        markButton.innerText = "Отметить флажком";
    }
}

function nextQuestion() {
    let currentQuestion = getCurrentQuestionNumber();
    goToQuestion(currentQuestion + 1);
}

function previousQuestion() {
    let currentQuestion = getCurrentQuestionNumber();
    goToQuestion(currentQuestion - 1);
}

function goToQuestion(number : number) {
    let currentQuestion = document.querySelector(".right-column .question.selected");
    let currentQuestionButton = document.querySelector(".left-column .select-button.selected");
    let newQuestion = document.querySelector(".right-column .question[question='" + number + "']");
    let newQuestionButton = document.querySelector(".left-column .select-button[question='" + number + "']");
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
    let form = document.getElementsByTagName("form")[0];
    let confirmation = confirm("Отправить результаты на проверку?");
    if (confirmation) {
        form.submit();
    }
}

function onLoad() {
    let firstQuestion = document.querySelector(".right-column .question[question='1']");
    let firstQuestionButton = document.querySelector(".left-column .select-button[question='1']");
    firstQuestion.classList.add("selected")
    firstQuestionButton.classList.add("selected")

    let markButton = document.getElementById("mark-question");
    markButton.onclick = markQuestion;

    let prevButton = document.getElementById("prev-question");
    let nextButton = document.getElementById("next-question");
    prevButton.onclick = previousQuestion;
    nextButton.onclick = nextQuestion;
    addWaveEffects(nextButton);
    addWaveEffects(prevButton);

    let buttons = document.querySelectorAll(".left-column nav .select-button");

    for (let i = 0; i < buttons.length; i++) {
        let questionNumber = +buttons[i].getAttribute("question");
        if (isNull(questionNumber))
            continue;

        (<HTMLElement>buttons[i]).onclick = function() {
            goToQuestion(questionNumber);
        }
        addWaveEffects(buttons[i])
    }

    let endTestButton : any = document.querySelector(".left-column .submit-button");
    endTestButton.onclick = endTest;
    addWaveEffects(endTestButton)

    let timer : HTMLElement = document.querySelector(".left-column .timer .time-left");
    let time = 60 * 60;
    setTimeout(function timerTick() {
        --time;
        let minutes = Math.floor(time / 60);
        let seconds = (time - +minutes * 60) % 60;
        let formatter = new Intl.NumberFormat("ru", {
            minimumIntegerDigits: 2
        })
        timer.innerText = "" + minutes + ":" + formatter.format(seconds);
        if (time >= 0) {
            setTimeout(timerTick, 1000);
        }
        else {
            alert("Время вышло!");
            let form = document.getElementsByTagName("form")[0];
            form.submit();
        }
    }, 1000)
}

document.addEventListener("DOMContentLoaded", onLoad);
