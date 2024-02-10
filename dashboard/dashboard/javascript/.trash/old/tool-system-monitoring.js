
$(document).ready(function () {

	refreshAPIHealthCheckStatus();

});

function refreshAPIHealthCheckStatus(){

	refreshStandardAPIHealthCheckStatus();

	refreshSpecialAPIHealthCheckStatus();

}

function refreshStandardAPIHealthCheckStatus() {

	console.debug(" -> :: refreshSpecialAPIHealthCheckStatus()");	

	//

	$.ajax({

		type: "GET",
		url: "https://api.articlemagick.softwareshinobi.online/health-check",

		contentType: "application/json; charset=utf-8",
		crossDomain: true,

		dataType: "html",

		success: function (data, status, jqXHR) {

			$("#standardAPI").removeClass("bg-dark");
			$("#standardAPI").removeClass("bg-success");

			$("#standardAPI").addClass("bg-success");

			$("#standardAPIText").html(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

			$("#standardAPI").removeClass("bg-dark");
			$("#standardAPI").removeClass("bg-success");

			$("#standardAPI").addClass("bg-dark");

			$("#standardAPIText").html("Standard API Appears To Be Down");
		}

	});

	//

	console.debug(" <- :: refreshSpecialAPIHealthCheckStatus()");
  
}



function refreshSpecialAPIHealthCheckStatus() {

	console.debug(" -> :: refreshSpecialAPIHealthCheckStatus()");	

	//

	$.ajax({

		type: "GET",
		url: "http://localhost:44444/health-check",

		contentType: "application/json; charset=utf-8",
		crossDomain: true,

		dataType: "html",

		success: function (data, status, jqXHR) {

			$("#specialAPI").removeClass("bg-dark");
			$("#specialAPI").removeClass("bg-success");

			$("#specialAPI").addClass("bg-success");

			$("#specialAPIText").html(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

			$("#specialAPI").removeClass("bg-dark");
			$("#specialAPI").removeClass("bg-success");

			$("#specialAPI").addClass("bg-dark");

			$("#specialAPIText").html("Special API Appears To Be Down");
		}

	});

	//

	console.debug(" <- :: refreshSpecialAPIHealthCheckStatus()");
  
}

