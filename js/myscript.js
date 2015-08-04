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
$(document).ready(function(){
	$("p").hover(function(){
		$(this).css("background-color", "yellow");
	}, function(){
		$(this).css("background-color", "white");
	});
});





/**
 * search and replace
 **/

function myFunction() {
	var str = document.getElementById("demo").innerHTML;
	var res = str.replace("William Shakespeare", "Sponge Bob");
	document.getElementById("demo").innerHTML = res;



	/**
	 * scroll
	 **/

	x = 0;
	$(document).ready(function(){
		$("blockquote").scroll(function(){

		});
	});
}



/**
 * search with angular
 **/

angular.module('Demo', [])
	.controller('Demo', function($scope) {
		$scope.data = [
			{ text: "<< ==== Put text to Search ===== >>" }
		]
	})
	.filter('highlight', function($sce) {
		return function(text, phrase) {
			if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
				'<span class="highlighted">$1</span>')

			return $sce.trustAsHtml(text)
		}
	})