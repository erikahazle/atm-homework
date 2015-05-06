$(document).ready(function(){

/************************
CURRENT ACCOUNT
************************/

$('#deposit1').on('click', add1);

function add1() {
  var input = parseInt($('#amount1').val());
  var initBalance1 = $('#balance1').text(); 
  if (initBalance1 === '$0') { 
    $('#balance1').text('$' + input); 
  } else {
    debugger;
    input = parseInt(input);
    initBalance1 = parseInt(initBalance1);
    var finalBalance1 = input + initBalance1;
    $('#balance1').text('$' + finalBalance1);
  }

} 

/************************
SAVINGS ACCOUNT
************************/

  $('#deposit2').on('click', add2);


  function add2() {
    var input = $('#amount2').val();
    $('#balance2').text('$' + input);
  };


})

