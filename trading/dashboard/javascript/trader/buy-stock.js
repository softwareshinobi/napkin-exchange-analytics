
$(document).ready(function () {

    fetchAccountInformation();

//alert("buy stock");

});

function clearForm(){

    setFundsAddAmount(1000000);
    
}

function setFundsAddAmount(fundAmount) {

	$("#amount-funds-add").val(fundAmount);

}

function processForm() {

	orderTicker=$("#buy-ticker").val();

	console.debug("orderTicker / " + orderTicker);

    orderUnits=$("#buy-units").val();

	console.debug("orderUnits / " + orderUnits);

	$.ajax({

		type: "POST",
		
		url: traderExchangeURL + "/inventory/buy/market/auto-close",

        data: JSON.stringify({
        
            username: currentTraderUsername,
            
            ticker: orderTicker,

            sharesToBuy: orderUnits
       
        }),

	contentType: "application/json",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            console.log("data / ", data);
            
            fetchAccountInformation();

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

}

function fetchAccountInformation() {

	console.debug(" -> :: fetchAccountInformation()");	

	$.ajax({

		type: "GET",
		
		url: "http://localhost:8888/account/"+currentTraderUsername,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            	$("#trader-username").val(data.username);

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

	console.debug(" <- :: fetchTraderDetails()");	

}
