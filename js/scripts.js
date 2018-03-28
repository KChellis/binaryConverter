function baseCheck(string, base){
  if (/[^0123456789abcdef]/.test(string) && base===16) {
    return false;
  }else if (/[^0123456789abcde]/.test(string) && base===15) {
    return false;
  }else if (/[^0123456789abcd]/.test(string) && base===14) {
    return false;
  }else if (/[^0123456789abc]/.test(string) && base===13) {
    return false;
  }else if (/[^0123456789ab]/.test(string) && base===12) {
    return false;
  }else if (/[^0123456789a]/.test(string) && base===11) {
    return false;
  }else if (/[^0123456789]/.test(string) && base===10) {
    return false;
  }else if (/[^012345678]/.test(string) && base===9) {
    return false;
  }else if (/[^01234567]/.test(string) && base===8) {
    return false;
  }else if (/[^0123456]/.test(string) && base===7) {
    return false;
  }else if (/[^012345]/.test(string) && base===6) {
    return false;
  }else if (/[^01234]/.test(string) && base===5) {
    return false;
  }else if (/[^0123]/.test(string) && base===4) {
    return false;
  }else if (/[^012]/.test(string) && base===3) {
    return false;
  }else if (/[^01]/.test(string) && base===2) {
    return false;
  }else {
    return true;
  }
}
function toDecimal(string, base){
  var reverse = "";
  for (var i = (string.length-1); i >= 0; i--) {
    reverse += string[i];
  }
  var array= reverse.split("");
  var decimal = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i]=== "a") {
      decimal += 10 * Math.pow(base, i);
      console.log(decimal);
    }else if (array[i] ==="b") {
      decimal += 11 * Math.pow(base, i);
    }else if (array[i] ==="c") {
      decimal += 12 * Math.pow(base, i);
    }else if (array[i] ==="d") {
      decimal += 13 * Math.pow(base, i);
    }else if (array[i] ==="e") {
      decimal += 14 * Math.pow(base, i);
    }else if (array[i] ==="f") {
      decimal += 15 * Math.pow(base, i);
    }else {
      decimal += (parseInt(array[i]) * Math.pow(base, i));
    }
  }
  return decimal;
}

$(document).ready(function(){
  $(".form1").submit(function(event){
    event.preventDefault();
    var input = $("#binary").val();
    var base = parseInt($("#base").val());
    if(baseCheck(input, base)) {
      var result = toDecimal(input, base);
      $(".result").show();
      $("#decimal").prepend("<li>" +input + " in base " + base + " is " + result + " in decimal.</li>");
    }else{
      alert("The number entered is not in the correct base");
    }
  });
  $("#clear").click(function(){
    location.reload();
  });
});
