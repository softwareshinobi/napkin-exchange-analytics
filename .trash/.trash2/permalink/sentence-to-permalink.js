
$(document).ready(function () {

	clearFormBoxesSTP();

    setInterval(processFormSTP, 1000);

});

function clearFormBoxesSTP(){

	setInputValueSTP("this is a string of text");

	setLabelValueSTP("");

}

function setInputValueSTP(newStringValue) {   

	$("#sentenceToPermalinkBefore").val(newStringValue);

}

function setLabelValueSTP(newStringValue) {

	$("#sentenceToPermalinkAfter").val(newStringValue);

}

function processFormSTP() {

	console.debug(" -> :: processFormSTP()");	

	//

	leftSideTextBox=$("#sentenceToPermalinkBefore").val();

	console.debug("sentenceToPermalinkBefore /" + leftSideTextBox);

	//

	$.ajax({

		type: "POST",

		url: "https://api.articlemagick.softwareshinobi.digital/article-magick/convert-to-permalink",

        data: leftSideTextBox,

		contentType: "text/plain",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

            console.log("data", data);

            setLabelValueSTP(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	//

	console.debug(" <- :: processFormSTP()");
  
}
