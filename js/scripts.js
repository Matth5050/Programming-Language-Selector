//Business Logic

function python() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qTwo = $("input:radio[name=question2]:checked").val();
  const pythonResult = 'Python';

  if (qOne === 'yes' && qTwo === 'desert' || qOne === 'yes' && qTwo === 'tropical') {
    return pythonResult;
  };
};

function swift() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qThree = $("input:radio[name=question3]:checked").val();
  const qFour = $("input:radio[name=question4]:checked").val();
  const swiftResult = 'Swift';

  if (qOne === 'no' && qFour === 'mac'|| qOne === 'no' && qThree === 'boba') {
    return swiftResult;
  };
};

function cSharp() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qFive = $("input:radio[name=question5]:checked").val();
  const cSharpResult = 'C#';

  if (qOne === 'no' && qFive === 'tofu' || qOne === 'no' && qFive === 'sunny') {
    return cSharpResult;
  };
};

function finalSelector() {
  if (python === true) {
    return python();
  } else if (swift === true) {
    return swift();
  } else if (cSharp === true) {
    return cSharp();
  } else {
    return 'JavaScript';
  }
};






//UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $('input#person1').val()
    
    $('.nameOutput').text(nameInput);
    $('.langOutput').text(Python());
    $('.outputContainer').show();
  })
})