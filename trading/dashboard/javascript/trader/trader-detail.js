$(document).ready(function () {

    visualizeTraderDetails();

    visualizeTraderOpenOrders();

});


function visualizeTraderDetails() {

	console.debug(" -> :: visualizeTraderDetails()");	

	$.ajax({

		type: "GET",
		
		url: traderExchangeURL + "/account/" + currentTraderUsername,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {
            
            insertTradeDetailContent(data);           

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

	console.debug(" <- :: fetchTraderDetails()");	

}


function insertTradeDetailContent(responseData) {

var trHTML = '';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + responseData.username + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.accountBalance + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.totalProfits + '</td>';

trHTML += '</tr>';	

for (var i =0;i< responseData.stocksOwned.length; i++) {

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + '</td>';

trHTML += '</tr>';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + '</td>';

trHTML += '</tr>';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + responseData.stocksOwned[i].ticker + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.stocksOwned[i].amountOwned + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.stocksOwned[i].costBasis + '</td>';

trHTML += '</tr>';	

}

$('#activity-display-table  > tbody').html(trHTML); 

console.log("trHTML", trHTML);

}


function visualizeTraderOpenOrders() {

	console.debug(" -> :: visualizeTraderOpenOrders()");	

	$.ajax({

		type: "GET",
		
		url: traderExchangeURL + "/inventory/orders/" + currentTraderUsername,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

          	console.debug("data / "+ data);

            populateOrderDetailSections(data);           

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

	console.debug(" <- :: visualizeTraderOpenOrders()");	

}


function populateOrderDetailSections(responseData) {

var trHTML = '';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + responseData.username + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.accountBalance + '</td>';

trHTML += '<td class="METADATA DEBUG">' + responseData.totalProfits + '</td>';

trHTML += '</tr>';	

for (var i =0;i< responseData.length; i++) {

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + '</td>';

trHTML += '</tr>';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + '</td>';

trHTML += '</tr>';

trHTML += '<tr>';

trHTML += '<td class="METADATA DEBUG">' + responseData[i].stock.ticker + '</td>';
trHTML += '<td class="METADATA DEBUG">' + responseData[i].stock.price + '</td>';
trHTML += '<td class="METADATA DEBUG">' + responseData[i].sharesToBuy + '</td>';
trHTML += '<td class="METADATA DEBUG">' + responseData[i].limitPrice + '</td>';
trHTML += '<td class="METADATA DEBUG">' + responseData[i].limitOrderType + '</td>';


//trHTML += '<td class="METADATA DEBUG">' + responseData.stocksOwned[i].amountOwned + '</td>';

//trHTML += '<td class="METADATA DEBUG">' + responseData.stocksOwned[i].costBasis + '</td>';

trHTML += '</tr>';	

}

$('#activity-display-table  > tbody').html(trHTML); 

console.log("trHTML", trHTML);

}
