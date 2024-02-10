
$(document).ready(function () {

	setInterval(updateCallistoPanel, 1000);

	setInterval(updateDionePanel, 1000);

	setInterval(updatePandoraPanel, 1000);

	setInterval(updateEuropaPanel, 1000);

});

// Callisto Things //

function onClickCallistoPanel() {

    console.log(" onclick / CALLISTO");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="CALLISTO";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateCallistoPanel() {

	$.ajax({

		type: "GET",

		url: apiURLBase + "/candlestick/CALLISTO",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-callisto-pricing").text(responsePayloadParsed.price);
           
            var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

            var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);;

            if (percentageChange >= 0) {

            $("#panel-callisto-change").text("+"+amountGain+" / " + "+"+percentageChange+"%");

            } else {

            $("#panel-callisto-change").text(amountGain+" / " +percentageChange+"%");

            }
		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

// Dione Things // 

function onClickDionePanel() {

    console.log(" onclick / DIONE");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="DIONE";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateDionePanel() {

	$.ajax({

		type: "GET",

		url: apiURLBase + "/candlestick/DIONE",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-dione-pricing").text(responsePayloadParsed.price);

            var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

            var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);;

            if (percentageChange >= 0) {

            $("#panel-dione-change").text("+"+amountGain+" / " + "+"+percentageChange+"%");

            } else {

            $("#panel-dione-change").text(amountGain+" / " +percentageChange+"%");

            }

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

// Europa Things //

function onClickEuropaPanel() {

    console.log(" onclick / EUROPA!");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="EUROPA";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateEuropaPanel() {

	$.ajax({

		type: "GET",

		url: apiURLBase + "/candlestick/EUROPA",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-europa-pricing").text(responsePayloadParsed.price);

            var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

            var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);;

            if (percentageChange >= 0) {

            $("#panel-europa-change").text("+"+amountGain+" / " + "+"+percentageChange+"%");

            } else {

            $("#panel-europa-change").text(amountGain+" / " +percentageChange+"%");

            }
		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}

// Pandora Things //

function onClickPandoraPanel() {

    console.log(" onclick / PANDORA!");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="PANDORA";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updatePandoraPanel() {

	$.ajax({

		type: "GET",

		url: apiURLBase + "/candlestick/PANDORA",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            $("#panel-pandora-pricing").text(responsePayloadParsed.price);

            var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

            var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);;

            if (percentageChange >= 0) {

            $("#panel-pandora-change").text("+"+amountGain+" / " + "+"+percentageChange+"%");

            } else {

            $("#panel-pandora-change").text(amountGain+" / " +percentageChange+"%");

            }
		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});
  
}
