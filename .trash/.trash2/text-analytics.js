
$(document).ready(function () {

	alert("text analytics");

$("#originalContent").val("");

	$( "#rewrittenContent" ).val("");

	setInterval(formatTextFromFirstTextBox, 1000);

});

function formatTextFromFirstTextBox() {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	originalContent=$("#originalContent").val();

	console.debug("originalContent: " + originalContent);

    //

	rewrittenContent=$( "#rewrittenContent" ).val();

	console.debug("rewrittenContent: " + rewrittenContent);

	//

	textFromFirstAndSecondTextBox = JSON.stringify({

		originalContent: originalContent,

		rewrittenContent: rewrittenContent

	});

	console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	//

	$.ajax({

		type: "POST",

		url: "https://api.articlemagick.softwareshinobi.digital/article-magick/calculate-similarity",

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

    aaaa = result.toFixed(2);

    /////////////////////////////////////

    const inverse = (1.0 - parseFloat(rewrittenText));

    vvv = inverse.toFixed(2)*100;

    $("#percentageOutputButton").html(aaaa+"% the same");

    $("#percentageOutputButtonInverse").html(vvv+"% different");

    console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
