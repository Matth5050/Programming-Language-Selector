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

// Takes the result of finalSelector and creates an appropriate link 
function linkMaker() {
  const selector = finalSelector();
  const link1 = $('<a>');
  link1.attr("href", "https://www.python.org/");
  link1.attr("title", "Python.org");
  link1.text("Python");
  link1.addClass("link");

  const link2 = $('<a>');
  link2.attr("href", "https://www.swift.org/");
  link2.attr("title", "Swift.org");
  link2.text("Swift");
  link2.addClass("link");

  const link3 = $('<a>');
  link3.attr("href", "https://docs.microsoft.com/en-us/dotnet/csharp/");
  link3.attr("title", "docs.microsoft.com");
  link3.text("C#");
  link3.addClass("link");

  const link4 = $('<a>');
  link4.attr("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
  link4.attr("title", "developer.mozilla.org");
  link4.text("JavaScript");
  link4.addClass("link");

  if (selector === 'Python') {
    return link1;
  } else if (selector === 'Swift') {
    return link2;
  } else if (selector === 'C#') {
    return link3;
  } else {
    return link4;
  }
}

//UI Logic

$(document).ready(function(){
  $("button#button").click(function() {
      $('.langOutput').children("a:nth-child(1)").remove();
    });
  });

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $('input#person1').val()
   
    $('.nameOutput').text(nameInput);
    $('.langOutput').prepend(linkMaker());
    $('#outputContainer').show();
    $('form#formOne')[0].reset();
  });
});
