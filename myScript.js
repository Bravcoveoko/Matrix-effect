var head = document.getElementById("header1");

letters_code = [];

for(var i = 60, j = 97; i <= 90 && j <= 122; i++, j++) {
	letters_code.push(i);
	letters_code.push(j);
}

var new_text = "";
var count = 0;
var main_word = prompt();
var index;
var main_word_count = 0;
var subString;

var animation = setInterval(function(){
	index = Math.floor((Math.random() * letters_code.length)); 
  	subString = String.fromCharCode(letters_code[index]);
  	head.innerHTML = new_text + subString;
  	if(new_text == main_word){
  		head.innerHTML = new_text;
  		console.log("Konec");
  		clearInterval(animation);
    }
  	if (count == 30) {
  		new_text += main_word[main_word_count];
  		count = 0;
  		main_word_count++;
  	}
    count++;
},10);