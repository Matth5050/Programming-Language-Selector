//Business Logic

// Determines if Python
function python() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qTwo = $("input:radio[name=question2]:checked").val();
 
  if (qOne === 'yes' && qTwo === 'desert' || qOne === 'yes' && qTwo === 'tropical') {
    return true;
  };
};

// Determines if Swift
function swift() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qThree = $("input:radio[name=question3]:checked").val();
  const qFour = $("input:radio[name=question4]:checked").val();
  
  if (qOne === 'no' && qFour === 'mac'|| qOne === 'no' && qThree === 'boba') {
    return true;
  };
};

// Determines if C#
function cSharp() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qFive = $("input:radio[name=question5]:checked").val();

  if (qOne === 'no' && qFive === 'tofu' || qOne === 'no' && qFive === 'sunny') {
    return true;
  };
};

//Makes final selection of language
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

function linkMaker() {
  const snake = finalSelector();
  const link1 = $('<a>');
  link1.attr("href", "https://www.python.org/");
  link1.attr("title", "Python.org");
  link1.text("Python");
  link1.addClass("link");












  if (snake === 'Python') {
    return link1;
  }
}




//UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $('input#person1').val()
   
    
    $('.nameOutput').text(nameInput);
    $('.langOutput').append(linkMaker());
    $('#outputContainer').show();
    $('form#formOne')[0].reset();
  })
})


// const snake = finalSelector();
//   const link = document.createElement('<a>');
//   link.textContent = 'Python';
//   link.href = 'https://www.python.org/';
//   const test = $('').append(link);