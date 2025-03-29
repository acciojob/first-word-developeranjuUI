function firstWord(s) {
  // your code here
	if(!s) return "";
	let index = s.indexOf(' ');
	if(index === -1) return s;
	return s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
