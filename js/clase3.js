'use strict'
document.addEventListener("DOMContentLoaded",function(event){
	document.getElementsByTagName("body")[0].style.background = "#58D3F7";

	var twitter = document.getElementById("twitter");
	var contenedor = document.createElement("div");
	twitter.appendChild(contenedor);
	
	var textarea = document.createElement("textarea");
	textarea.type = "text";
	contenedor.appendChild(textarea)
	textarea.style.width = "800px";
	textarea.style.height = "150px";
	textarea.style.marginLeft = "15%";
	textarea.style.marginRight = "20%";
	textarea.style.marginTop = "30px"

	var button = document.createElement("button");
	button.type = "twitt";
	button.innerHTML = "twittear";
	contenedor.appendChild(button);
	button.style.width = "100px";
	button.style.height = "30px";
	button.style.marginLeft = "68.8%";
	var elements = document.getElementById("twitt")

	var oTwitter = document.createElement("div");
	contenedor.appendChild(oTwitter);
	oTwitter.style.width = "700px";
	oTwitter.style.height = "350px";
	oTwitter.style.background = "#FFF"
	oTwitter.style.marginLeft = "19%";
	oTwitter.style.marginRight = "20%";
	oTwitter.style.marginTop = "20px"

function listaTwitte() {
    var lt;
    var lista = "<ul>";
    var twittes = ["@LaUltimaThule anuncia concierto en Caracas >> http://ow.ly/LYPSS ",
				   "@ChiguireBipolar Se filtró el nuevo sistema cambiario que impondrá el gobierno",
				   "@CCulturalBOD Encuentra todas nuestras entradas en las taquillas del teatro o en",
				   "@ComplexMag This is the result of getting caught cheating by your girlfriend",
				   "@Inspirationf Organize your Brain: The Best Tools",
				   "@javacodegeeks #HTML5 websocket example http://buff.ly/1G457B8",
				   "@ESACCIONP0ETICA  No tengas miedo a fallar, ten miedo a no intentarlo.",
				   "@MongoDB Slides & video from our recent performance tuning webinar. Enjoy!",
				   "@adskFusion360 Free 3D CAD/CAM for startups. Really. It’s free!",
				   "@TuBreakCaracas Netflix parodia al Apple Watch (VIDEO) http://is.gd/5flkq3 "];
    for (lt = 0; lt < twittes.length; lt++) {
        lista += twittes[lt] + "<br>";
    }
    lista += "</ul>";
    var oTwitter = document.getElementById("oTwitter");
    document.getElementById("oTwitter").innerHTML = lista;

}
document.getElementById("button").onclick = agregartwitt();


});

  

 
/*var elements = document.getElementById("twitt");
elements.addEventListener("click",function(){console.log("click")})
*/
