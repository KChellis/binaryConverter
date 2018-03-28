function binaryCheck(string){
  if (/[^10]/.test(string)) {
    return false;
  }else {
    return true;
  }
}
function toDecimal(string){
  var reverse = "";
  for (var i = (string.length-1); i >= 0; i--) {
    reverse += string[i];
    console.log(reverse);
  }
  var decimal = 0;
  for (var i = 0; i < reverse.length; i++) {
    if (reverse[i] === "1") {
      decimal += Math.pow(2, i);
      console.log(decimal);
    } else {

    }
  }
  return decimal;
}

$(document).ready(function(){
  $(".form1").submit(function(event){
    event.preventDefault();
    var input = $("#binary").val();
    if(binaryCheck(input)) {
      var result = toDecimal(input);
      $("#decimal").text(input + " is " + result + " in decimal.");
    }else{
      alert("Please enter a binary number only");
    }
  });
});
