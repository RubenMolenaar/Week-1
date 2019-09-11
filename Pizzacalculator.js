/*Function(bestellen){
	var a = parseInt(document.querySelector("#Small").value)
	var b = parseInt(document.querySelector("#Medium").value)
	var c = parseInt(document.querySelector("#Large").value)

	var d = a * 5
	var e = b * 10
	var f = c * 15

	alert(d + " " + e + " " + f)

}*/
var a = parseInt(prompt("hoeveel small pizzas wil je"));
var b = parseInt(prompt("hoeveel medium pizzas wil je"));
var c = parseInt(prompt("hoeveel large pizzas wil je"));

var d = parseInt(a * 5)
var e = parseInt(b * 10)
var f = parseInt(c * 15)

document.write(a + "x" + " Small pizza(s) = "+ "&euro;" + "5 x "+ a + " = &euro;" + d + "</br>")
document.write(b + "x" + " Medium pizza(s) = "+ "&euro;" + "10 x "+ b + " = &euro;" + e + "</br>")
document.write(c + "x" + " Small pizza(s) = "+ "&euro;" + "15 x "+ c + " = &euro;" + f + "</br>")

document.write("</br>" + "Te betalen bedrag = "+ "&euro;" + (d + e + f))

