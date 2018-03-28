function baseCheck(string){
  if (/[^0123456789abcdef]/.test(string)) {
    return false;
  }else {
    return true;
  }
}
function toDecimal(string){
  var reverse = "";
  for (var i = (string.length-1); i >= 0; i--) {
    reverse += string[i];
  }
  var array= reverse.split("");
  console.log(array);
  var decimal = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i]=== "a") {
      decimal += 10 * Math.pow(16, i);
      console.log(decimal);
    }else if (array[i] ==="b") {
      decimal += 11 * Math.pow(16, i);
    }else if (array[i] ==="c") {
      decimal += 12 * Math.pow(16, i);
    }else if (array[i] ==="d") {
      decimal += 13 * Math.pow(16, i);
    }else if (array[i] ==="e") {
      decimal += 14 * Math.pow(16, i);
    }else if (array[i] ==="f") {
      decimal += 15 * Math.pow(16, i);
    }else {
      decimal += (parseInt(array[i]) * Math.pow(16, i));
    }
  }
  return decimal;
}

$(document).ready(function(){
  $(".form1").submit(function(event){
    event.preventDefault();
    var input = $("#binary").val();
    if(baseCheck(input)) {
      var result = toDecimal(input);
      $("#decimal").text(input + " is " + result + " in decimal.");
    }else{
      alert("Please enter a hexadecimal number only");
    }
  });
});
