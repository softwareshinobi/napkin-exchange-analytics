
$(document).ready(function () {

});

function formatTextFromFirstTextBox(textToFormat) {

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
		url: "https://api.articlemagick.softwareshinobi.online/simple-text-format",

		data: leftSideTextBox,

		//contentType: "application/json; charset=utf-8",
		contentType: "text/plain",

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
function rewriteTextFromFirstTextBox() {

	console.debug(" -> :: rewriteTextFromFirstTextBox() ");

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
		url: "https://api.articlemagick.softwareshinobi.online/simple-text-format",

		data: leftSideTextBox,

		contentType: "application/json; charset=utf-8",
		crossDomain: true,
		dataType: "html",

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

	console.debug(" <- :: rewriteTextFromFirstTextBox() ");
  
}

function setTextOfFirstTextBoxToRewrittenText(rewrittenText) {

	console.debug(" -> :: setTextOfFirstTextBoxToRewrittenText()");

//	$("#leftSideTextBox").html(rewrittenText);
	$("#rightSideTextBox").html(rewrittenText);
	console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
