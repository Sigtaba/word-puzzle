//turn sentence into array
var sentence = "Learn how to program at Epicodus";
//make array for all vowels
var vowels = ["a", "e", "i", "o", "u", "E"];

//sentence gets garbled by dashes replacing vowels


var garbleSentence = sentence;
for (var index = 0; index < vowels.length; index += 1) {
  garbleSentence = garbleSentence.split(vowels[index]).join("-");
}

var userInput = prompt("Guess what the vowels are in this sentence: " + garbleSentence);

    for (var index = 1; index <= 1;) {
      if (userInput === sentence) {
        alert("That's right, baby!!");
        index += 1;
      }
      else if (userInput != sentence) {
        var userInput = prompt("Guess again!" + garbleSentence + ":");
      }
    }
