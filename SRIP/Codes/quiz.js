var myQuestions = [
    {
        question: "1) Can you distinguish between AND and XNOR gate when both the inputs are 1?",
        answers: {
            a: 'NO',
            b: 'YES',
            c: 'MAY OR MAYNOT',
            d: 'NONE'
        },
        correctAnswer: 'a'
    },
    {
        question: "2) Chose the correct design of (A+BC)' using NMOS only.",
        answers: {
            a: 'fig1',
            b: 'fig2',
            c: 'fig3',
            d: 'fig4'
        },
        correctAnswer: 'b'
    },
   {
        question: "3) Chose the correct design of (AC+BC)' using PMOS only.",
        answers: {
            a: 'fig5',
            b: 'fig6',
            c: 'fig7',
            d: 'fig8'
        },
        correctAnswer: 'a'
    },
    {
        question: "4) In above question what is the minimum number of transistor required for making the design?",
        answers: {
           a: '4',
           b: '2',
           c: '5.',
           d: '3'
        },
       correctAnswer: 'c'
    },
    {
        question: "5) Chose the correct design of ABC using complementary logic.",
        answers:{
           a: 'fig9',
           b: 'fig10',
           c: 'fig11',
           d: 'fig12'
        },
        correctAnswer: 'b'
    },
    {
        question: "6) Chose the correct design of A+B+C using complementary logic.",
        answers:{
           a: 'fig13',
           b: 'fig14',
           c: 'fig15',
           d: 'fig16'
        },
        correctAnswer: 'b'
    },
    {
        question: "7) What will be the minimum number of transistor required for designing ABC+A'BC'+(AB)'C+A(BC)'?",
        answers:{
           a: '12',
           b: '11',
           c: '8',
           d: '10'
        },
        correctAnswer: 'b'
    },
    {
        question: "8) What will be the minimum number of transistor required for designing xy+xz+zy+xy'+z ?",
        answers:{
           a: '6',
           b: '4',
           c: '3',
           d: '2'
        },
        correctAnswer: 'c'
    },
    {
        question: "9) Reduce the expression xy(z+w)+y'(x'z+xz)+z'w and tell the min number of transistor required for the design.",
        answers:{
           a: '8',
           b: '6',
           c: '11',
           d: '12'
        },
        correctAnswer: 'a'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
