
$(document).ready(function () {
	
	clearFormBoxes();

    $("#topArea").click();

	setInterval(processForm, 1000);

});

function clearFormBoxes(){

    $("#originalContent").val("");

    $("#topArea").click();

    $("#bottomArea").click();

    $("#rightSideTextBox").val("");

    $("#percentageOutputButton").html("--");

}

function clearButtonValue() {

	console.debug(" -> :: clearButtonValue()");	

	$("#percentageOutputButton").html("");

	console.debug(" <- :: clearButtonValue()");
}

function setButtonValue(percentageDifference) {

	console.debug(" -> :: setButtonValue()");	

	$("#rewrittenContent").html(percentageDifference);

	console.debug(" <- :: setButtonValue()");

}

function processForm() {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	originalContent=$("#originalContent").val();

	console.debug("originalContent: " + originalContent);

	rightSideTextBox=$( "#rewrittenContent" ).val();

	console.debug("rightSideTextBox: " + rightSideTextBox);

	textFromFirstAndSecondTextBox = JSON.stringify({

		originalContent: originalContent,

		rewrittenContent: rightSideTextBox

	});

	console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	$.ajax({

		type: "POST",

		url: "https://api.articlemagick.softwareshinobi.digital/article-magick/simple-format",

		data: textFromFirstAndSecondTextBox,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			setButtonValue(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	console.debug(" <- :: formatTextFromFirstTextBox()");

}
