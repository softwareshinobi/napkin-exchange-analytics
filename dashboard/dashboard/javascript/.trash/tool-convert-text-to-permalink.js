
$(document).ready(function () {

    alert("asfs");

	clearFormBoxes();

});

function clearFormBoxes(){

	setInputValue("");

	setLabelValue("");

}

function setInputValue(newStringValue) {

	$("#leftSideTextBox").val(newStringValue);

}

function setLabelValue(newStringValue) {

	$("#rightSideTextBox").val(newStringValue);

}

function processForm(textToFormat) {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	leftSideTextBox=$("#leftSideTextBox").val();

	console.debug("leftSideTextBox: " + leftSideTextBox);

	//

	$.ajax({

		type: "POST",
		url: "https://api.softwareshinobi.online/article-magick/convert-to-permalink",

		data: leftSideTextBox,

		contentType: "text/plain",
		crossDomain: true,
		dataType: "text",

		success: function (data, status, jqXHR) {

console.log("data");console.log(data);			setLabelValue(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	//

	console.debug(" <- :: formatTextFromFirstTextBox()");
  
}
