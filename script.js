// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_CONFIG = {
    serviceID: 'service_y0wt7hg',  // Get from EmailJS dashboard
    templateID: 'template_gjulm2v', // Get from EmailJS dashboard
    publicKey: 'ohWKccYwtK2S2JKd8'    // Get from EmailJS dashboard
};

// Quiz questions and answers
// Question types: 'single' (one answer), 'multi' (multiple answers), 'text' (free text), 'image-single', 'image-multi'
const quizData = [
    {
        type: 'single',
        question: "Koľko € dávala Bitwala za jej odporúčenie?",
        answers: ["5€", "10€", "15€", "30€"],
        correct: 2, // Index of correct answer (15€)
        feedback: "Správne! Zarobené :D"
    },
    {
        type: 'multi',
        question: "Obľúbené ovocie ktoré môžeš jesť?",
        answers: ["🍎 Jablko", "🍌 Banán", "🍓 Jahoda", "🍊 Pomaranč", "🥝 Kivi", "🍇 Hrozno", "🍑 Broskyňa", "🍉 Melón", "🍍 Ananás", "🥭 Mango"],
        correct: [], // Will be filled with user's choices - all are valid
        feedback: "Super výber! 🍎🍌"
    },
    {
        type: 'single',
        question: "Čo si si najviac užila?",
        answers: ["🏎️ Motokáry", "🧇 Wafle", "🎯 Streľbu", "🛍️ Nakupovanie", "😄 Pranky na ľudí"],
        correct: -1, // No wrong answer
        feedback: "Krásna spomienka! 😊"
    },
    {
        type: 'image-multi',
        question: "Aké auto sa ti najviac páči?",
        answers: [
            { text: "Ferrari 296 GTB", image: "https://cdn.ferrari.com/cms/network/media/img/resize/63c5451c14e24d75a27ce6a2-ferrari-296-gtb-assetto-fiorano?width=800" },
            { text: "Maserati MC20", image: "https://www.maserati.com/content/dam/maserati/international/Models/default/2023/mc20/hero/Maserati-MC20-Hero-Desktop.jpg&width=800" },
            { text: "Lamborghini Huracán", image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_02_m.jpg&width=800" },
            { text: "Porsche 911 GT3", image: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d0-005056bbdc38/porsche-model.png" },
            { text: "BMW M4 Competition", image: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/m-series/bmw-m4-coupe-2020/bmw-4-series-m-automobiles-sp-desktop.jpg" },
            { text: "Mercedes-AMG GT", image: "https://www.mercedes-benz.com/en/vehicles/passenger-cars/amg/mercedes-amg-gt/_jcr_content/root/paragraph/paragraph-right/paragraphimage/image/MQ7-0-image-20220419101504/02-mercedes-amg-gt-c-3400x1440.jpeg" }
        ],
        correct: [], // All valid
        feedback: "Dobrý výber áut! 🏎️"
    },
    {
        type: 'single',
        question: "Išla by si na bungee jumping alebo skok padákom?",
        answers: ["Jasné, ale asi sa budem trochu báť", "Nie", "Bojím sa", "Nikdy!!!"],
        correct: -1, // No wrong answer - all valid
        feedback: "Každý má svoje hranice! 🪂"
    },
    {
        type: 'single',
        question: "Koľko rokov trvala 30 ročná vojna?",
        answers: ["25 rokov", "30 rokov", "30 rokov 5 mesiacov a 1 deň", "35 rokov"],
        correct: 2,
        feedback: "Presne! Historička! 📚"
    },
    {
        type: 'single',
        question: "Môžeš papať čokoládu?",
        answers: ["Áno", "Iba horkú", "Nie nemôžem"],
        correct: -1, // All valid
        feedback: "V pohode! 🍫"
    },
    {
        type: 'image-single',
        question: "Ktorá ferrata sa ti páči najviac?",
        answers: [
            { text: "Via ferrata Kyseľ", image: "kysel_01.jpg" },
            { text: "Via ferrata Dve veže", image: "dve_veze.jpg" },
            { text: "Via ferrata Martinské hole", image: "martinske_hole.jpg" },
            { text: "Via ferrata Prielom Hornádu", image: "https://www.viaferrata.sk/images/ferraty/prielom/prielom_01.jpg" }
        ],
        correct: -1, // No wrong answer
        feedback: "Musíme tam ísť! 🧗‍♀️"
    },
    {
        type: 'single',
        question: "Predá primár Šlastan niekedy auto? 🤔",
        answers: ["Nie 😅", "Možno za 100 rokov a 200€", "Daruje ho na charitu", "Cez Bazoš možno niekedy"],
        correct: -1, // All valid
        feedback: "Haha dobrá odpoveď! 😄"
    },
    {
        type: 'text',
        question: "Čo by si chcela robiť na Maldives 2 týždne?",
        placeholder: "Napíš sem svoje plány...",
        feedback: "Znie to úžasne! 🏝️"
    },
    {
        type: 'single',
        question: "Sárka je ...?",
        answers: ["Extrémne zlaté dieťa", "Strašne zlaté dieťa", "Najzlatšie dieťa na svete", "Všetky odpovede sú správne 😄"],
        correct: -1, // All answers valid
        feedback: "Samozrejme! 💛✨"
    },
    {
        type: 'single',
        question: "Patrí 🍍 na pizzu?",
        answers: ["Áno", "Nie", "Je to jedno"],
        correct: -1, // All valid
        feedback: "Každý má svoj vkus! 🍕"
    },
    {
        type: 'text',
        question: "Aký bol tvoj najkrajší zážitok z detstva?",
        placeholder: "Napíš sem svoju spomienku...",
        feedback: "Krásna spomienka! ❤️"
    },
    {
        type: 'single',
        question: "Máš rada tanec?",
        answers: ["Áno", "Trochu", "Veľmi", "Nie"],
        correct: -1, // No wrong answer
        feedback: "Super! 💃✨"
    },
    {
        type: 'text',
        question: "Keby si mohla zmeniť jednu vec na svete, čo by to bolo?",
        placeholder: "Napíš sem svoju odpoveď...",
        feedback: "Krásna myšlienka! 🌍💫"
    }
];

let currentQuestionIndex = 0;
let userAnswers = []; // Store user's answers

// DOM elements
const loginScreen = document.getElementById('loginScreen');
const mainContainer = document.getElementById('mainContainer');
const passwordInput = document.getElementById('passwordInput');
const loginError = document.getElementById('loginError');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const questionFeedback = document.getElementById('questionFeedback');
const progressFill = document.getElementById('progressFill');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const finalScreen = document.getElementById('finalScreen');
const quizContainer = document.getElementById('quizContainer');

// Check password
function checkPassword() {
    const password = passwordInput.value.toLowerCase().trim();
    if (password === 'burger') {
        loginScreen.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        initQuiz();
    } else {
        loginError.textContent = 'Nesprávna odpoveď, skús znova! 😊';
        passwordInput.value = '';
    }
}

// Allow Enter key to submit password
if (passwordInput) {
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// Initialize quiz
function initQuiz() {
    totalQuestionsEl.textContent = quizData.length;
    loadQuestion();
    updateProgress();

    // Load saved progress if exists
    const savedProgress = localStorage.getItem('saraQuizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestionIndex = progress.questionIndex || 0;
        userAnswers = progress.answers || [];
    }
}

// Random Ali cat images
const aliImages = ['ali1.jpeg', 'ali2.jpeg', 'ali3.jpeg', 'ali4.jpeg'];

function getRandomAliImage() {
    const randomIndex = Math.floor(Math.random() * aliImages.length);
    return aliImages[randomIndex];
}

// Load current question
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showFinalScreen();
        return;
    }

    const question = quizData[currentQuestionIndex];
    questionText.textContent = question.question;
    questionFeedback.textContent = '';
    questionFeedback.className = 'question-feedback';

    // Update Ali image
    const aliImg = document.getElementById('aliImage');
    if (aliImg) {
        aliImg.src = getRandomAliImage();
    }

    // Clear previous answers
    answersContainer.innerHTML = '';

    // Handle different question types
    if (question.type === 'text') {
        // Text input question
        const textarea = document.createElement('textarea');
        textarea.className = 'text-answer';
        textarea.placeholder = question.placeholder || 'Tvoja odpoveď...';
        textarea.id = 'textAnswer';
        answersContainer.appendChild(textarea);

        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Potvrdiť';
        submitBtn.onclick = () => submitTextAnswer();
        answersContainer.appendChild(submitBtn);

    } else if (question.type === 'multi') {
        // Multiple choice with checkboxes
        answersContainer.className = 'answers-container multi-select';
        question.answers.forEach((answer, index) => {
            const label = document.createElement('label');
            label.className = 'answer-checkbox-label';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'answer-checkbox';
            checkbox.value = index;
            checkbox.id = `answer-${index}`;

            const span = document.createElement('span');
            span.textContent = answer;

            label.appendChild(checkbox);
            label.appendChild(span);
            answersContainer.appendChild(label);
        });

        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Potvrdiť výber';
        submitBtn.onclick = () => submitMultiAnswer();
        answersContainer.appendChild(submitBtn);

    } else if (question.type === 'image-single' || question.type === 'image-multi') {
        // Image-based questions
        answersContainer.className = 'answers-container image-grid';
        question.answers.forEach((answer, index) => {
            const card = document.createElement('div');
            card.className = question.type === 'image-multi' ? 'image-answer-card multi' : 'image-answer-card';
            card.dataset.index = index;

            const img = document.createElement('img');
            img.src = answer.image;
            img.alt = answer.text;
            img.className = 'answer-image';

            const text = document.createElement('p');
            text.className = 'answer-text';
            text.textContent = answer.text;

            if (question.type === 'image-multi') {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'image-checkbox';
                checkbox.value = index;
                card.appendChild(checkbox);
            }

            card.appendChild(img);
            card.appendChild(text);

            if (question.type === 'image-single') {
                card.onclick = () => selectAnswer(index);
            } else {
                card.onclick = () => toggleImageCard(card);
            }

            answersContainer.appendChild(card);
        });

        if (question.type === 'image-multi') {
            const submitBtn = document.createElement('button');
            submitBtn.className = 'submit-btn';
            submitBtn.textContent = 'Potvrdiť výber';
            submitBtn.onclick = () => submitMultiImageAnswer();
            answersContainer.appendChild(submitBtn);
        }

    } else {
        // Single choice (default)
        answersContainer.className = 'answers-container';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            answersContainer.appendChild(button);
        });
    }

    updateProgress();
}

// Handle answer selection (single choice)
function selectAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];

    if (question.type === 'image-single') {
        const cards = document.querySelectorAll('.image-answer-card');
        cards.forEach(card => card.style.pointerEvents = 'none');

        // Store the answer
        userAnswers[currentQuestionIndex] = {
            question: question.question,
            answer: question.answers[selectedIndex].text,
            answerIndex: selectedIndex,
            type: 'image-single'
        };

        cards[selectedIndex].classList.add('selected');
        showFeedbackAndContinue(question, true);

    } else {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.disabled = true);

        // Check if answer is correct (if validation needed)
        if (question.correct === -1 || selectedIndex === question.correct) {
            // Store the answer
            userAnswers[currentQuestionIndex] = {
                question: question.question,
                answer: question.answers[selectedIndex],
                answerIndex: selectedIndex,
                type: 'single'
            };

            buttons[selectedIndex].classList.add('correct');
            saveProgress();
            showFeedbackAndContinue(question, true);
        } else {
            buttons[selectedIndex].classList.add('wrong');
            buttons[question.correct].classList.add('correct');
            questionFeedback.textContent = 'Skús to znova! 💪';
            questionFeedback.className = 'question-feedback wrong';

            setTimeout(() => {
                buttons.forEach(btn => {
                    btn.disabled = false;
                    btn.classList.remove('wrong', 'correct');
                });
                questionFeedback.textContent = '';
            }, 2000);
        }
    }
}

// Submit text answer
function submitTextAnswer() {
    const question = quizData[currentQuestionIndex];
    const textarea = document.getElementById('textAnswer');
    const answer = textarea.value.trim();

    if (!answer) {
        questionFeedback.textContent = 'Prosím, napíš niečo! 😊';
        questionFeedback.className = 'question-feedback wrong';
        return;
    }

    // Store the answer
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        answer: answer,
        type: 'text'
    };

    textarea.disabled = true;
    showFeedbackAndContinue(question, true);
    saveProgress();
}

// Submit multiple choice answer
function submitMultiAnswer() {
    const question = quizData[currentQuestionIndex];
    const checkboxes = document.querySelectorAll('.answer-checkbox:checked');

    if (checkboxes.length === 0) {
        questionFeedback.textContent = 'Prosím, vyber aspoň jednu možnosť! 😊';
        questionFeedback.className = 'question-feedback wrong';
        return;
    }

    const selectedIndexes = Array.from(checkboxes).map(cb => parseInt(cb.value));
    const selectedAnswers = selectedIndexes.map(i => question.answers[i]);

    // Store the answer
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        answer: selectedAnswers.join(', '),
        answerIndexes: selectedIndexes,
        type: 'multi'
    };

    // Disable all checkboxes
    document.querySelectorAll('.answer-checkbox').forEach(cb => cb.disabled = true);
    showFeedbackAndContinue(question, true);
    saveProgress();
}

// Submit multiple image answer
function submitMultiImageAnswer() {
    const question = quizData[currentQuestionIndex];
    const checkboxes = document.querySelectorAll('.image-checkbox:checked');

    if (checkboxes.length === 0) {
        questionFeedback.textContent = 'Prosím, vyber aspoň jednu možnosť! 😊';
        questionFeedback.className = 'question-feedback wrong';
        return;
    }

    const selectedIndexes = Array.from(checkboxes).map(cb => parseInt(cb.value));
    const selectedAnswers = selectedIndexes.map(i => question.answers[i].text);

    // Store the answer
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        answer: selectedAnswers.join(', '),
        answerIndexes: selectedIndexes,
        type: 'image-multi'
    };

    // Mark selected cards
    selectedIndexes.forEach(index => {
        const card = document.querySelector(`.image-answer-card[data-index="${index}"]`);
        if (card) card.classList.add('selected');
    });

    document.querySelectorAll('.image-answer-card').forEach(card => card.style.pointerEvents = 'none');
    showFeedbackAndContinue(question, true);
    saveProgress();
}

// Toggle image card selection (for multi-select)
function toggleImageCard(card) {
    const checkbox = card.querySelector('.image-checkbox');
    checkbox.checked = !checkbox.checked;
    card.classList.toggle('selected', checkbox.checked);
}

// Show feedback and continue to next question
function showFeedbackAndContinue(question, isCorrect) {
    questionFeedback.textContent = question.feedback;
    questionFeedback.className = 'question-feedback correct';

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex === quizData.length) {
            showFinalScreen();
        } else {
            loadQuestion();
        }
    }, 2000);
}

// Show final screen
function showFinalScreen() {
    quizContainer.classList.add('hidden');
    finalScreen.classList.remove('hidden');
    createConfetti();

    // Save final answers
    localStorage.setItem('saraQuizAnswers', JSON.stringify(userAnswers));
    saveProgress();

    // Send email with answers
    sendEmailWithAnswers();
}

// Send email with quiz answers
function sendEmailWithAnswers() {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Format answers for email
    let answersText = userAnswers.map((item, index) => {
        return `${index + 1}. ${item.question}\n   Odpoveď: ${item.answer}\n`;
    }).join('\n');

    // Prepare email parameters
    const templateParams = {
        to_email: 'jan.stas105@gmail.com',
        answers: answersText,
        total_questions: quizData.length,
        date: new Date().toLocaleString('sk-SK')
    };

    // Send email
    emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
        }, function(error) {
            console.error('Failed to send email:', error);
            // Still save to localStorage as backup
        });
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
}

// Create confetti animation
function createConfetti() {
    const confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach(confetti => {
        confetti.innerHTML = '';
        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.animationDelay = Math.random() * 3 + 's';
            piece.style.backgroundColor = getRandomColor();
            confetti.appendChild(piece);
        }
    });
}

// Get random color for confetti
function getRandomColor() {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#6366f1'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Save progress to localStorage
function saveProgress() {
    const progress = {
        questionIndex: currentQuestionIndex,
        answers: userAnswers
    };
    localStorage.setItem('saraQuizProgress', JSON.stringify(progress));
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    localStorage.removeItem('saraQuizProgress');

    finalScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    loadQuestion();
}