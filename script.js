const situation = document.getElementById("situation");
const problem = document.getElementById("problem");
const planButton = document.getElementById("planButton");

const error = document.getElementById("error");

const formSection = document.getElementById("formSection");
const resultSection = document.getElementById("resultSection");

const resultText = document.getElementById("resultText");
const planList = document.getElementById("planList");

const restartButton = document.getElementById("restartButton");


// Модель данных
const plans = {
    study: [
        "Остановитесь и спокойно определите главную проблему.",
        "Разделите большую задачу на несколько маленьких.",
        "Выберите самое простое действие и начните с него.",
        "После выполнения проверьте результат."
    ],

    stress: [
        "Остановитесь и сделайте несколько спокойных вдохов.",
        "Определите причину стресса.",
        "Уберите то, что сейчас можно отложить.",
        "Сосредоточьтесь только на ближайшем шаге."
    ],

    conflict: [
        "Сделайте паузу и не отвечайте сразу на эмоциях.",
        "Определите, из-за чего возник конфликт.",
        "Спокойно объясните свою точку зрения.",
        "Попробуйте найти решение, которое подходит обеим сторонам."
    ],

    other: [
        "Спокойно определите, что именно произошло.",
        "Определите, что вы можете контролировать.",
        "Выберите одно ближайшее действие.",
        "Если ситуация требует помощи, обратитесь к человеку, которому доверяете."
    ]
};


// Главное действие
planButton.addEventListener("click", function() {

    error.textContent = "";

    if (situation.value === "") {
        error.textContent = "Выберите ситуацию.";
        return;
    }

    if (problem.value.trim() === "") {
        error.textContent = "Опишите проблему.";
        return;
    }

    const selectedPlan = plans[situation.value];

    resultText.textContent =
        "Проблема: " + problem.value;

    planList.innerHTML = "";

    selectedPlan.forEach(function(step) {

        const li = document.createElement("li");

        li.textContent = step;

        planList.appendChild(li);
    });

    formSection.style.display = "none";
    resultSection.style.display = "block";
});


// Начать заново
restartButton.addEventListener("click", function() {

    situation.value = "";
    problem.value = "";

    error.textContent = "";

    planList.innerHTML = "";
    resultText.textContent = "";

    resultSection.style.display = "none";
    formSection.style.display = "block";
});