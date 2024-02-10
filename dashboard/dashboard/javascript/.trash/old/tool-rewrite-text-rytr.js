
$(document).ready(function () {

	$("#welcomeModalButton").click(function(){ rewriteContentFromLeftTextBox(); });


});

function rewriteContentFromLeftTextBox() {

	console.debug(" -> :: rewriteContentFromLeftTextBox()");	

	//

	leftSideTextBox=$("#leftSideTextBox").text();

	console.debug("leftSideTextBox: " + leftSideTextBox);
	
	leftSideTextBoxJSON = JSON.stringify({

		originalContent: leftSideTextBox//,

	//	rewrittenContent: rightSideTextBox

	});
	//

	$.ajax({

		type: "POST",

		url: "http://localhost:44444/rewrite-text-rytr",

		data: leftSideTextBoxJSON,

		contentType: "application/json; charset=utf-8",

		//contentType: "text/html; charset=utf-8",

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

	console.debug(" <- :: rewriteContentFromLeftTextBox()");
  
}

function setTextOfFirstTextBoxToRewrittenText(rewrittenText) {

	console.debug(" -> :: setTextOfFirstTextBoxToRewrittenText()");

	$("#rightSideTextBox").html(rewrittenText);

	console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
