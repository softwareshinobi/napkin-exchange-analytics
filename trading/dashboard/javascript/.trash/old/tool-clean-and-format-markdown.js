
$(document).ready(function () {

});

function formatTextFromFirstTextBox(textToFormat) {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	leftSideTextBox=$("#leftSideTextBox").text();

	console.debug("leftSideTextBox: " + leftSideTextBox);

	//

	$.ajax({

		type: "POST",
		url: "https://api.articlemagick.softwareshinobi.online/simple-text-format",

		data: leftSideTextBox,

		contentType: "text/plain",
		crossDomain: true,
		dataType: "text",

		success: function (data, status, jqXHR) {

console.log("data");console.log(data);			setTextOfFirstTextBoxToRewrittenText(data);

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

function setTextOfFirstTextBoxToRewrittenText(rewrittenText) {

	console.debug(" -> :: setTextOfFirstTextBoxToRewrittenText()");

//	$("#leftSideTextBox").html(rewrittenText);
	$("#rightSideTextBox").html(rewrittenText);
	console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
