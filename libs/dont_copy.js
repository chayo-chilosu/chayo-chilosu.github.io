// ป้องการการคลุมดำที่ข้อความ
// <script language="JavaScript1.2" type="text/javascript">
function disableselect(e) {
	return false;
}
function reEnable() {
	return true;
}
// if IE4+
document.onselectstart = new Function ("return false");
// if NS6
if (window.sidebar) {
	document.onmousedown = disableselect;
	document.onclick = reEnable;
}
// </script>