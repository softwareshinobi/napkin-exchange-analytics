
$(document).ready(function () {

	setInterval(formatTextFromFirstTextBox, 1000);

});

function formatTextFromFirstTextBox() {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	leftSideTextBox=$("#leftSideTextBox").text();

	console.debug("leftSideTextBox: " + leftSideTextBox);

	rightSideTextBox=$( "#rightSideTextBox" ).text();

	console.debug("rightSideTextBox: " + rightSideTextBox);

	//

	textFromFirstAndSecondTextBox = JSON.stringify({

		originalContent: leftSideTextBox,

		rewrittenContent: rightSideTextBox

	});

	console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	//

	$.ajax({

		type: "POST",
		url: "https://desktop.mateomontenegro.online:8080/article-magick/calculate-text-percentage-difference",

		data: textFromFirstAndSecondTextBox,

		contentType: "application/json; charset=utf-8",
		//contentType: "text/plain",

		crossDomain: true,
		dataType: "text",

		success: function (data, status, jqXHR) {

			setTextOfFirstTextBoxToRewrittenText(data);

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

const result = parseFloat(rewrittenText)*100;

aaaa = +result.toFixed(2);

	$("#welcomeModalButton").html(aaaa+"%");

	console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
