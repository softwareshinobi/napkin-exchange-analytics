$(document).ready(function () {

    setInterval(fetchCandlestickHistory, 1000);

});

function fetchCandlestickHistory() {

    console.log("fetchCandlestickHistory / " + apiSymbol);

	$.ajax({

		type: "GET",

		url: apiURLBase + "/candlestick/" + apiSymbol,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			updateBottomCornerPricing(data);

		},

		error: function (jqXHR, status) {

		}

	});
  
}

function updateBottomCornerPricing(responsePayload) {

    console.debug(" -> :: updateBottomCornerPricing()");

    var responsePayloadParsed  = JSON.parse(responsePayload);

    $("#bottom-corner-symbol-pricing").text(responsePayloadParsed.price);

    var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

    console.debug("amountGain / "+amountGain);

    var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);

    if (percentageChange >= 0) {

        $("#bottom-corner-symbol-diff").text("+"+amountGain+" / " + "+"+percentageChange+"%");

        $("#bottom-corner-symbol-diff").removeClass("text-danger");

        $("#bottom-corner-symbol-diff").addClass("text-success");

    } else {

        $("#bottom-corner-symbol-diff").text(amountGain+" / " +percentageChange+"%");

        $("#bottom-corner-symbol-diff").addClass("text-danger");

    }


// updat stuff at the top

    $("#symbolTicker").text(responsePayloadParsed.ticker);

    $("#symbolName").text(responsePayloadParsed.companyName);

    $("#symbolSector").text(responsePayloadParsed.sector);

    $("#symbolCap").text(responsePayloadParsed.marketCap);

}
