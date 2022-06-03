//Business Logic

function python() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qTwo = $("input:radio[name=question2]:checked").val();
 
  if (qOne === 'yes' && qTwo === 'desert' || qOne === 'yes' && qTwo === 'tropical') {
    return true;
  };
};

function swift() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qThree = $("input:radio[name=question3]:checked").val();
  const qFour = $("input:radio[name=question4]:checked").val();
  
  if (qOne === 'no' && qFour === 'mac'|| qOne === 'no' && qThree === 'boba') {
    return true;
  };
};

function cSharp() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qFive = $("input:radio[name=question5]:checked").val();

  if (qOne === 'no' && qFive === 'tofu' || qOne === 'no' && qFive === 'sunny') {
    return true;
  };
};

function finalSelector() {
  const snake = python();
  const iphone = swift();
  const sharp = cSharp();
  if (snake === true) {
    return 'Python';
  } else if (iphone === true) {
    return 'Swift';
  } else if (sharp === true) {
    return 'C#';
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
    $('.langOutput').text(finalSelector());
    $('.outputContainer').show();
  })
})