const subJect = {
    wolvesQuestion: [
        {
            question: 'A kangaroo is _______ stronger than a human?',
            answerOptions: {
                answer1: '6 times',
                answer2: '2 times',
                answer3: 'Not a chance',
                answer4: '4 times',
                mainAnswer : '6 times'
            }
        },
        {
            question: 'Is a bear is stronger than a moose?',
            answerOptions: {
                answer1: 'Yes',
                answer2: 'No',
                answer3: 'Not sure',
                answer4: 'None will win',
                mainAnswer : 'Yes'
            }
        },
        {
            question: 'What is the strongest animal on earth?',
            answerOptions: {
                answer1: 'Tiger',
                answer2: 'Lion',
                answer3: 'Dung beetle',
                answer4: 'Rat',
                mainAnswer : 'Tiger'
            }
        },
        {
            question: 'What is the largest animal in the world?',
            answerOptions: {
                answer1: 'Ant',
                answer2: 'Antarctic blue whale', // Correct answer
                answer3: 'Elephant',
                answer4: 'Shark whale',
                mainAnswer: 'Antarctic blue whale' // Storing the correct answer
            }
        },
        {
            question: 'How many wolves were used to kill a moose?',
            answerOptions: {
                answer1: 2,
                answer2: 5,
                answer3: 10,
                answer4: 15,
                mainAnswer: 15 // Correct answer
            }
        },
        {
            question: 'How fast can a cheetah run?',
            answerOptions: {
                answer1: '10km/h',
                answer2: '80 - 130 km/h', // Correct answer
                answer3: '200km/h',
                answer4: '2km/h',
                mainAnswer: '80 - 130 km/h' // Storing the correct answer
            }
        },
        {
            question: 'What is the fastest sky animal in the world?',
            answerOptions: {
                answer1: 'Parrot',
                answer2: 'Robin',
                answer3: 'Peregrine Falcon', // Correct answer
                answer4: 'Eagle',
                mainAnswer: 'Peregrine Falcon' // Storing the correct answer
            }
        },
        {
            question: 'What is the most friendly animal in the world?',
            answerOptions: {
                answer1: 'Capybara', // Correct answer
                answer2: 'Shark',
                answer3: 'Lion',
                answer4: 'Dog',
                mainAnswer: 'Capybara' // Storing the correct answer
            }
        },
        {
            question: 'What is the smallest animal dwelling on earth?',
            answerOptions: {
                answer1: 'Rat',
                answer2: 'Myxozoan', // Correct answer
                answer3: 'Bat',
                answer4: 'Fish',
                mainAnswer: 'Myxozoan' // Storing the correct answer
            }
        },
    ],

    wolvesQuestion:[
        {
            question: 'How many lanets do we have?',
            answerOptions: {
                answer1: 100,
                answer2: 8,
                answer3: 9,
                answer4: 1,
                mainAnswer : 8
            }
        },
        {
            question: 'What is the planet mars well known for?',
            answerOptions: {
                answer1: 'The red plnet',
                answer2: 'The third planet',
                answer3: 'The fat planet',
                answer4: 'None of the above',
                mainAnswer : 'The red plnet'
            }
        },
        {
            question: 'Are there different types of black holes?',
            answerOptions: {
                answer1: 'yes',
                answer2: 'no',
                answer3: 'stellar-mass, supermassive, and intermediate-mass.',
                answer4: 'None of the above',
                mainAnswer : 'stellar-mass, supermassive, and intermediate-mass.'
            }
        },
        {
            question: 'Can wind travel faster than the speed of sound?',
            answerOptions: {
                answer1: 'no',
                answer2: 'yes with it is own proposion',
                answer3: 'Yes, wind can travel faster than sound',
                answer4: 'None of the above',
                mainAnswer : 'no.'
            }
        },
        {
            question: 'Clouds are just water vapor, so why do they move?',
            answerOptions: {
                answer1: 'no',
                answer2: 'not sure',
                answer3: 'none of th above',
                answer4: 'because wind can blow water droplets around',
                mainAnswer : 'because wind can blow water droplets around.'
            }
        },
        {
            question: 'Do I weigh less on the equator than at the North Pole?',
            answerOptions: {
                answer1: 'no',
                answer2: 'A person weighs more at the North Pole than at the Equator',
                answer3: 'not sure',
                answer4: 'none of th above',
                mainAnswer : 'A person weighs more at the North Pole than at the Equator.'
            }
        },
        {
            question: 'Does the back of a rainbow look the same as its front side?',
            answerOptions: {
                answer1: 'no',
                answer2: ' No, the back of a rainbow does not look the same as its front side',
                answer3: 'not sure',
                answer4: 'none of th above',
                mainAnswer : ' No, the back of a rainbow does not look the same as its front side.'
            }
        },
        {
            question: 'Does wasting household water remove it from the water cycle?',
            answerOptions: {
                answer1: 'no',
                answer2: ' but it does remove it from the portion of the water cycle that is readily accessible and usable by humans.',
                answer3: 'not sure',
                answer4: 'none of th above',
                mainAnswer : ' but it does remove it from the portion of the water cycle that is readily accessible and usable by humans..'
            }
        },
        {
            question: 'Does wasting household water remove it from the water cycle?',
            answerOptions: {
                answer1: 'no',
                answer2: ' but it does remove it from the portion of the water cycle that is readily accessible and usable by humans.',
                answer3: 'not sure',
                answer4: 'none of th above',
                mainAnswer : ' but it does remove it from the portion of the water cycle that is readily accessible and usable by humans..'
            }
        },
    ]
};

let currentQuestionIndex = 0; // Track the current question index
let timeLeft = 120;
const countdownElement = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.textContent = "Time's up!";
    }

    timeLeft--;
}, 1000);

const populateQuestionFunc = (index) => {
    const questionData = subJect.wolvesQuestion[index];

    const populateQuestion = `
        <div class="inner">
            <div class="text">
                <p style="color: grey">Question ${index + 1} out of ${subJect.wolvesQuestion.length}</p>
            </div>
            <h1 class="outline">${questionData.question}</h1>
        </div>
        <div class="answerbutton">
            <button class="answer" data-answer="${questionData.answerOptions.answer1}">${questionData.answerOptions.answer1}</button>
            <button class="answer" data-answer="${questionData.answerOptions.answer2}">${questionData.answerOptions.answer2}</button>
            <button class="answer" data-answer="${questionData.answerOptions.answer3}">${questionData.answerOptions.answer3}</button>
            <button class="answer" data-answer="${questionData.answerOptions.answer4}">${questionData.answerOptions.answer4}</button>
        </div>`;

    document.getElementById('coverQuestionDiv').innerHTML = populateQuestion;

    setupEventListeners(questionData.answerOptions.mainAnswer);
};

const setupEventListeners = (correctAnswer) => {
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => handleAnswerClick(button, correctAnswer));
    });
};

function handleAnswerClick(button, correctAnswer) {
    const selectedAnswer = button.dataset.answer;
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
        alert("Correct answer!");
    } else {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        alert(`Wrong answer! The correct answer is: ${correctAnswer}`);
        highlightCorrectAnswer(correctAnswer);
    }

    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < subJect.wolvesQuestion.length) {
            populateQuestionFunc(currentQuestionIndex);
        } else {
            alert("You've completed all the questions!");
        }
    }, 2000);
}

function highlightCorrectAnswer(correctAnswer) {
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(button => {
        if (button.dataset.answer === correctAnswer) {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
        }
    });
}

populateQuestionFunc(currentQuestionIndex);