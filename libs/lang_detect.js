var userLang = window.navigator.language || window.navigator.userLanguage; 
// thai language
// alert(userLang);
if (userLang == "th-TH") {
    window.location.href = "index_th.htm";
}
else if (userLang == "th") {
	window.location.href = "index_th.htm";
}
// english language
else if(userLang == "en-US") {
	window.location.href = "index_en.htm";
}
else if(userLang == "en") {
	window.location.href = "index_en.htm";
}
// other language
else {
	window.location.href = "index_en.htm";
}
// alert ("The language is: " + userLang);