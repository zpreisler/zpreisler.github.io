var a=document.getElementsByClassName("firstwords");
for(var x=0;x<a.length;x++){
	var words=a[x].innerHTML.split(" ");
	var first=words.shift();
	words=words.join(" ");
	var j=x+1;
	a[x].innerHTML="<span class=\"firstword\">"+j+first+" </span> "+words;
}
var a=document.getElementsByClassName("countwords");
for(var x=0;x<a.length;x++){
	var words=a[x].innerHTML;
	var j=x+1;
	a[x].innerHTML="<span class=\"firstword\">["+j+"] </span> "+words;
}
