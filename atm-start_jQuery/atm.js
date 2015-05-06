$(document).ready(function(){

  /************************
  CURRENT ACCOUNT
  ************************/

  // DEPOSITS

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

  // WITHDRAW

  $('#withdraw1').on('click', withdraw1);

  function withdraw1() {
    var input1 = parseInt($('#amount1').val());
    var initBalance1 = $('#balance1').text(); 

  // Handling #balance1 value

    var array1 = initBalance1.split('');
    array1.shift();
    initBalance1 = parseInt(array1.join(''));

    if (initBalance1 >= input1) {
      var finalBalance1 = initBalance1 - input1;
      $('#balance1').text('$' + finalBalance1);
    } else {
      var initBalance2 = $('#balance2').text(); 
      var array2 = initBalance2.split('');
      array2.shift();
      initBalance2 = parseInt(array2.join(''));

      fullBalance = initBalance1 + initBalance2;

      if (fullBalance > input1) {
        input1 = input1 - initBalance1;
        $('#balance1').text('$0');
        $('#balance1').css('border', '10px solid red');
        var finalBalance2 = initBalance2 - input1;
        $('#balance2').text('$' + finalBalance2);
      } else {
        alert('You do not have enough money in your accounts!!!')
      }
    }
      
    
  }

/************************
SAVINGS ACCOUNT
************************/

  $('#deposit2').on('click', add2);

  function add2() {
    var input2 = parseInt($('#amount2').val());
    var initBalance2 = $('#balance2').text(); 
    if (initBalance2 === '$0') { 
      $('#balance2').text('$' + input2); 
    } else {
      var array2 = initBalance2.split('');
      array2.shift();
      initBalance2 = parseInt(array2.join(''));
      var finalBalance2 = input2 + initBalance2;
      $('#balance2').text('$' + finalBalance2);
    }
  } 

  $('#withdraw2').on('click', withdraw2);

  function withdraw2() {
    var input2 = parseInt($('#amount2').val());
    var initBalance2 = $('#balance2').text(); 

  // Handling #balance1 value

    var array2 = initBalance2.split('');
    array2.shift();
    initBalance2 = parseInt(array2.join(''));

    if (initBalance2 > input2) {
      var finalBalance2 = initBalance2 - input2;
      $('#balance2').text('$' + finalBalance2);
    } else {
      alert('There is no overdraft on your savings account!')
    }
  }


})