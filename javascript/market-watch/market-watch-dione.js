
$(document).ready(function () {

  //  alert("market-watch-dione.js");

	//$("#bottom-corner-symbol-pricing").text("");

//	$( "#rewrittenContent" ).val("");

	setInterval(formatTextFromFirstTextBox, 1000);

});

function formatTextFromFirstTextBox() {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

//	originalContent=$("#originalContent").val();

//	console.debug("originalContent: " + originalContent);

    //

//	rewrittenContent=$( "#rewrittenContent" ).val();

//	console.debug("rewrittenContent: " + rewrittenContent);

	//

	//textFromFirstAndSecondTextBox = JSON.stringify({

	//	originalContent: originalContent,
//
	//	rewrittenContent: rewrittenContent

//	});

	//console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	//

	$.ajax({

		type: "GET",

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/CALLISTO",

	//	data: textFromFirstAndSecondTextBox,

		contentType: "application/json; charset=utf-8",

		//contentType: "text/plain",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			updateBottomCornerPricing(data);

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

function updateBottomCornerPricing(responsePayload) {

console.debug(" -> :: updateBottomCornerPricing()");

var responsePayloadParsed  = JSON.parse(responsePayload);

$("#bottom-corner-symbol-pricing").text(responsePayloadParsed.price);

//

var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

console.debug("amountGain / "+amountGain);

var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);;

if (percentageChange >= 0) {

$("#bottom-corner-symbol-diff").text("+"+amountGain+" / " + "+"+percentageChange+"%");

$("#bottom-corner-symbol-diff").removeClass("text-danger");
$("#bottom-corner-symbol-diff").addClass("text-success");

} else {

$("#bottom-corner-symbol-diff").text(amountGain+" / " +percentageChange+"%");
$("#bottom-corner-symbol-diff").addClass("text-danger");

}


}

