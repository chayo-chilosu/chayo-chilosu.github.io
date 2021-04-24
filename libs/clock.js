function time() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = chk_time(m);
	s = chk_time(s);
	document.getElementById("clock").innerHTML = h+":"+m+":"+s;
	setTimeout(time, 1000);
}

function chk_time(i) {
	if(i < 10) { i="0"+i };
	return i;
}