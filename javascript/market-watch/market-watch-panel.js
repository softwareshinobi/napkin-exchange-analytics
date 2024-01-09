
$(document).ready(function () {

	setInterval(updateDIONEPanel, 1000);

	setInterval(updateCALLISTOPanel, 1000);

	setInterval(updatePandoraPanel, 1000);

	setInterval(updateEuropaPanel, 1000);

});

function updateEuropaPanel() {
console.log("1");
	$.ajax({

		type: "GET",

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/EUROPA",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

console.log("2");

            $("#panel-europa-pricing").text(responsePayloadParsed.price);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

function updatePandoraPanel() {
console.log("1");
	$.ajax({

		type: "GET",

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/PANDORA",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

console.log("2");

            $("#panel-pandora-pricing").text(responsePayloadParsed.price);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

function updateCALLISTOPanel() {

	$.ajax({

		type: "GET",

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/CALLISTO",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-callisto-pricing").text(responsePayloadParsed.price);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

function updateDIONEPanel() {

	$.ajax({

		type: "GET",

		url: "https://api2.napkinexchange.softwareshinobi.digital/candlestick/DIONE",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-dione-pricing").text(responsePayloadParsed.price);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}
