s = document.getElementById("mw-content-text").innerHTML;
s = document.getElementById("mw-content-text").innerHTML = s.replace(/<p>[\s\S]*?(User:Hyijun)[\s\S]*?<\/p>/gmi, "a");
s = document.getElementById("mw-content-text").innerHTML = s.replace(/<dd>[\s\S]*?(User:Hyijun)[\s\S]*?<\/dd>/gmi, "a");
