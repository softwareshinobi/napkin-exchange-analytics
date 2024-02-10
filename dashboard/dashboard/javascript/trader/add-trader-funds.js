
$(document).ready(function () {

    fetchAccountInformation();

});

function clearForm(){

    setFundsAddAmount(1000000);
    
}

function setFundsAddAmount(fundAmount) {

	$("#amount-funds-add").val(fundAmount);

}

function processForm() {

	fundsAddAmount=$("#amount-funds-add").val();

	console.debug("fundsAddAmount / " + fundsAddAmount);



	$.ajax({

		type: "POST",
		
		url: traderExchangeURL + "/account/deposit",

        data: JSON.stringify({
        
            username: currentTraderUsername,
            
            amountToAdd: fundsAddAmount
       
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

            	$("#trader-balance").val(new Intl.NumberFormat().format(data.accountBalance));

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

	console.debug(" <- :: fetchTraderDetails()");	

}
