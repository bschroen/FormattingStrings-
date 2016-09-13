var $ = function (id){
	return document.getElementById(id);
}

var show = function ()
{
	var display = "\tThere are more possible iterations of a game of chess than there are atoms in the known universe.\"\n\t\t\t— abbazabbbbbbba";

	$("display").value = display;
}

window.onload = function()
{
	$("show").onclick = show;
}