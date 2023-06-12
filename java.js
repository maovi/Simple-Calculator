var result = $("#result");

function insertNumber(number){
  var existingNumber = result.val();

  result.val(existingNumber+number);
}

function clearResult(){
  result.val('');
}

function calculate(){
  var totalResult = eval(result.val());
  result.val(totalResult);
}

function deleteNumber(){
  var presentValue = result.val();

  if(presentValue !=''){
    result.val(presentValue.slice(0,-1));
  }
}