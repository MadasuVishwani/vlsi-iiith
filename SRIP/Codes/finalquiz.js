

        var score = 0;
        var currentQuestion = 0;
        var questions = [{
            title: "1) Can you distinguish between AND and XNOR gate when both the inputs are 1?",
            answers: ['NO', 'YES', 'MAY OR MAYNOT', 'NONE'],
            correct: 0
        },
        {
            title: "2) Chose the correct design of (A+BC)' using NMOS only.",
            answers: ['fig1', 'fig2', 'fig3', 'fig4'],
            correct: 2
        },
        {
            title: "3) Chose the correct design of (AC+BC)' using PMOS only.",
            answers: ['fig5', 'fig6', 'fig7', 'fig8'],
            correct: 0
        },
        {
            title: "4) In above question what is the minimum number of transistor required for making the design?",
            answers: ['4', '2', '5', '3'],
            correct: 3
        },
        {
            title: "5) Chose the correct design of ABC using complementary logic.",
            answers: ['fig9', 'fig10', 'fig11', 'fig12'],
            correct: 1
        },
        {
            title: "6) Chose the correct design of A+B+C using complementary logic.",
            answers: ['fig13', 'fig14', 'fig15', 'fig16'],
            correct: 1
        },
        {
            title: "7) What will be the minimum number of transistor required for designing ABC+A'BC'+(AB)'C+A(BC)'?",
            answers: ['12', '11', '8', '10'],
            correct: 1
        },
        {
            title: "8) What will be the minimum number of transistor required for designing xy+xz+zy+xy'+z ?",
            answers: ['6', '4', '3', '2'],
            correct: 3
        },
        {
            title: "9) Reduce the expression xy(z+w)+y'(x'z+xz)+z'w and tell the min number of transistor required for the design.",
            answers: ['8', '6', '11', '12'],
            correct: 0
        },
        ];
         $(document).ready(function () {
             $('.start a').click(function (e) {
                e.preventDefault();
                $('.start').hide();
                $('.quiz').show();
                showQuestion();
            });
             $('.quiz ul').on('click', 'li', function () {
                $('.selected').removeClass('selected');
                $(this).addClass('selected');
            });
             $('.quiz a').click(function (e) {
                e.preventDefault();
                if ($('li.selected').length) {
                    let guess = parseInt($('li.selected').attr('id'));
                    let isCorrect = $('li.selected').attr('isCorrect');
                    checkAnswer(guess, isCorrect);
                } else {
                    alert('Please select an answer');
                }
            });
             $('.summary a').click(function (e) {
                e.preventDefault();
                restartQuiz();
            });
         });
         function showQuestion() {
            let question = questions[currentQuestion];
            $('.quiz h2').text(question.title);
            $('.quiz ul').html('');
            for (var i = 0; i < question.answers.length; i++) {
                $('.quiz ul').append(`<li isCorrect="true" id="${i}">${question.answers[i]}</li>`);
            }
            showProgress();
        }
         function showIncorrectQuestion(guess) {
            let question = questions[currentQuestion];
            $('.quiz h2').text(question.title);
            $('.quiz ul').html('');
            for (var i = 0; i < question.answers.length; i++) {
                let cls = i === question.correct ? "selected" : guess === i ? "wrong" : ""
                $('.quiz ul').append(`<li id="${i}" isCorrect="false" class="${cls}">${question.answers[i]}</li>`);
            }
            showProgress();
        }
         function checkAnswer(guess, isCorrect) {
             let question = questions[currentQuestion];
            if (question.correct === guess) {
                if (isCorrect === 'true') {
                    score++;
                }
                showIsCorrect(true);
                currentQuestion++;
                if (currentQuestion >= questions.length) {
                    showSummary();
                } else {
                    showQuestion();
                }
            } else {
                showIsCorrect(false);
                showIncorrectQuestion(guess);
            }
         }
         function showSummary() {
            $('.quiz').hide();
            $('.summary').show();
            $('.summary p').text("Thank you for taking the quiz! Here's how you scored. You answered " + score + " out of " + questions.length + " correctly! Try again?")
        }
         function restartQuiz() {
            $('.summary').hide();
            $('.quiz').show();
            score = 0;
            currentQuestion = 0;
            showQuestion();
        }
         function showProgress() {
            $('#currentQuestion').html(currentQuestion + " out of " + questions.length);
        }
         function showIsCorrect(isCorrect) {
            var result = "Wrong";
            if (isCorrect) {
                result = "Correct";
            }
            $('#isCorrect').html(result);
        }



