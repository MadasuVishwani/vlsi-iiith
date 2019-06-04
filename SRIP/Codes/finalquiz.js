
(function() 
 {
  var allQuestions = [{
    question: "1) Can you distinguish between AND and XNOR gate when both the inputs are 1?",
    options: ['NO', 'YES', 'MAY OR MAYNOT', 'NONE'],
    answer: 0
  }, {
    question: "2) Chose the correct design of (A+BC)' using NMOS only.",
    options: ['fig1', 'fig2', 'fig3', 'fig4'],
    answer: 2
  }, {
    question: "3) Chose the correct design of (AC+BC)' using PMOS only.",
    options: ['fig5', 'fig6', 'fig7', 'fig8'],
    answer: 0
  },{
    question: "4) In above question what is the minimum number of transistor required for making the design?",
    options: ['4', '2', '5', '3'],
    answer: 3
  }, {
    question: "5) Chose the correct design of ABC using complementary logic.",
    options: ['fig9', 'fig10', 'fig11', 'fig12'],
    answer: 1
    }
    question: "6) Chose the correct design of A+B+C using complementary logic.",
    options: ['fig13', 'fig14', 'fig15', 'fig16'],
    answer: 1
    }
    question: "7) What will be the minimum number of transistor required for designing ABC+A'BC'+(AB)'C+A(BC)'?",
    options: ['12', '11', '8', '10'],
    answer: 1
    }
    question: "8) What will be the minimum number of transistor required for designing xy+xz+zy+xy'+z ?",
    options: ['6', '4', '3', '2'],
    answer: 3
    }
    question: "9) Reduce the expression xy(z+w)+y'(x'z+xz)+z'w and tell the min number of transistor required for the design.",
    options: ['8', '6', '11', '12'],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();