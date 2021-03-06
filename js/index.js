function encode() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var cipher = [
  '2', '22', '222',
  '3', '33', '333',
  '4', '44', '444',
  '5', '55', '555',
  '6', '66', '666',
  '7', '77', '777',
  '8', '88', '888',
  '9', '99', '999', '9999'];


  var getPosition = function getPosition(text) {return (
      text.split("").map(function (x) {return alphabet.indexOf(x);}));};

  var input = $("#input").val().split("");
  var output = "";

  for (var i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output = output.substring(0, output.length - 1);
      output += ' ';
    } else {
      output += cipher[getPosition(input[i])] + '-';
    }
  }
  output = output.substring(0, output.length - 1);
  return output;
}

$("#submit").click(function () {
  $("#output").text(encode());
});
