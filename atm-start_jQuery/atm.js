$(document).ready(function(){

/************************
CURRENT ACCOUNT
************************/

$('#deposit1').on('click', add1);

function add1() {
  var input1 = parseInt($('#amount1').val());
  var initBalance1 = $('#balance1').text(); 
  if (initBalance1 === '$0') { 
    $('#balance1').text('$' + input1); 
  } else {
    var array1 = initBalance1.split('');
    array1.shift();
    initBalance1 = parseInt(array1.join(''));
    var finalBalance1 = input1 + initBalance1;
    $('#balance1').text('$' + finalBalance1);
  }
} 

$('#withdraw1').on('click', withdraw1);

function withdraw1() {
  var input1 = parseInt($('#amount1').val());
  var initBalance1 = $('#balance1').text(); 

// Handling #balance1 value

  var array1 = initBalance1.split('');
  array1.shift();
  initBalance1 = parseInt(array1.join(''));


  var finalBalance1 = initBalance1 - input1;
  $('#balance1').text('$' + finalBalance1);
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

