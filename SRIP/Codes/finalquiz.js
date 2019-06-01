<!DOCTYPE html>
<html>

 <head>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            text-align: center;
            background-color:#7FFFD4;
        }
         h1 {
            font-family: 'Open Sans';
            background-color: #FFAB0D;
            padding: 10px;
            color: rgb(13, 15, 140);
            text-decoration: underline;
           
        }
         h2 {
            font-family: 'arial';
            font-size: 30px;
            padding: 30px;
            background-color:rgb(128,128,128);
            color: rgb(0,0,0);
        }
         p {
            font-family: 'Open Sans';
            font-size: 15px;
            font-weight: bold;
         }
         a {
            border: 1px solid blue;
            padding: 20px;
            background-color: rgb(34, 47, 91);
            color: silver;
            border-radius: 5px;
            margin-top: 50px;
            display: inline-block;
        }
         a:hover {
            border: 2px solid black;
            background-color: grey;
            color: #FCBF2B;
        }
         .quiz li {
            cursor: pointer;
            border: 1px solid;
            display: inline-block;
            width: 200px;
            margin: 10px;
            font-family: 'arial';
            font-size: 26px;
        }
         #currentQuestion {
            color: black;
            font-size: 25px;
            font-family: 'arial';
            margin-top: 15px;
         }
         #isCorrect {
            color: white;
            font-family: 'arial';
            font-weight: bold;
            font-size: 18px;
         }
         .quiz,
        .summary {
            display: none;
        }
         .quiz ul {
            margin-top: 20px;
            list-style: none;
            padding: 0;
        }
         .selected {
            background-color: green;
        }
         .wrong {
            background-color: red;
        }
    </style>
    <script>
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
    </script>



     <link href="https://fonts.googleapis.com/css?family=Poor+Story" rel="stylesheet">
    <meta name="viewport" content="width=device-width">
    <title>QUIZ</title>
</head>

 <body>


     <div class="start">
        <h1>QUIZ</h1>
        <a href="#">Start Quiz</a>
    </div>


     <div class="quiz">
        <h2>Question Title</h2>
        <ul>
            <li>Choice</li>
            <li>Choice</li>
            <li>Choice</li>
            <li>Choice</li>
        </ul>
        <a href="#">SUBMIT</a>
        <div id="currentQuestion"></div>
        <div id="isCorrect"></div>
    </div>


     <div class="summary">
        <h2>Results</h2>
        <p>Thank you for taking the quiz. You answered x out of y correctly!Try again?</p>
        <a href="#">Retake Quiz</a>
    </div>
<p><b>fig1</b></p><img src="D:\images\comp1.jpg">
<p><b>fig2</b></p><img src="D:\images\comp2.jpg">
<p><b>fig3</b></p><img src="D:\images\comp3.jpg">
<p><b>fig4</b></p><img src="D:\images\comp4.jpg">
<p><b>fig5</b></p><img src="D:\images\comp5.jpg">
<p><b>fig6</b></p><img src="D:\images\comp6.jpg">
<p><b>fig7</b></p><img src="D:\images\comp7.jpg">
<p><b>fig8</b></p><img src="D:\images\comp8.jpg">
<p><b>fig9</b></p><img src="D:\images\comp9.jpg">
<p><b>fig10</b></p><img src="D:\images\comp10.jpg">
<p><b>fig11</b></p><img src="D:\images\comp11.jpg">
<p><b>fig12</b></p><img src="D:\images\comp12.jpg">
<p><b>fig13</b></p><img src="D:\images\comp13.jpg">
<p><b>fig14</b></p><img src="D:\images\comp14.jpg">
<p><b>fig15</b></p><img src="D:\images\comp15.jpg">
<p><b>fig16</b></p><img src="D:\images\comp16.jpg">

 </body>

 </html> 