
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

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/DIONE",

	//	data: textFromFirstAndSecondTextBox,

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

function setTextOfFirstTextBoxToRewrittenText(responsePayload) {

    console.debug(" -> :: setTextOfFirstTextBoxToRewrittenText()");
    console.debug("responsePayload / ",responsePayload);
    //const result = parseFloat(rewrittenText)*100;



var responsePayloadParsed  = JSON.parse(responsePayload);

//alert("responsePayloadParsed / " + responsePayloadParsed.price);


   // aaaa = result.toFixed(2);

    /////////////////////////////////////

   // const inverse = (1.0 - parseFloat(rewrittenText));

  //  vvv = inverse.toFixed(2)*100;

//alert($( "responsePayload" ).data());

//$( "responsePayload" ).data();

console.log( $( "responsePayload" ).data() );


    $("#bottom-corner-symbol-pricing").text(responsePayloadParsed.price);

  //  $("#percentageOutputButtonInverse").html(vvv+"% different");

 //   console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}

