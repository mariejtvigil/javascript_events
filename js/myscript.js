/* javaScript Document */

/*
 Description: javascript exercise
 Author: mariejtvigil
 */


/**
 * highlights word when pushing a button
 **/

function highlight(text)
{
	inputText = document.getElementById("inputText")
	var innerHTML = inputText.innerHTML
	var index = innerHTML.indexOf(text);
	if ( index >= 0 )
	{
		innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		inputText.innerHTML = innerHTML
	}

}

/**
 * changes the background color when moused over
 **/

function mouseOver() {
	document.getElementById("mouse").style.backgroundColor = "red";
}

function mouseOut() {
	document.getElementById("mouse").style.backgroundColor = "blue";
}





