//Business Logic

function Python() {
  const qOne = $("input:radio[name=question1]:checked").val();
  const qTwo = $("input:radio[name=question2]:checked").val();
  const qThree = $("input:radio[name=question3]:checked").val();
  const qFour = $("input:radio[name=question4]:checked").val();
  const qFive = $("input:radio[name=question5]:checked").val();
  const result = 'Python'

  if (qOne === 'yes' && qTwo === 'desert' || qOne === 'yes' && qTwo === 'tropical') {
    return result;
  };
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