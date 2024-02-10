
$(document).ready(function () {

	clearFormBoxes();
	
    // alert("cloud admin");

});

function clearFormBoxes(){

    setLocalServiceName("");

    // setRemoteServerIP("");

    setRemoteServerPort(""); 

    hideResultsArea();
    
}

function setLocalServiceName(newValue) {

	$("#local-service-name").val(newValue);

}

function setRemoteServerIP(newValue) {

	$("#container-host-ip").val(newValue);

}

function setRemoteServerPort(newValue) {

	$("#container-host-port").val(newValue);

}

function showResultsArea() {

	$("#results-area-parent-div").show();

}

function hideResultsArea() {

	$("#results-area-parent-div").hide();

}


function setResultsArea(newValue) {

	$("#results-area").text(newValue);

}

function processForm() {

	//console.debug(" -> :: processForm()");	

	//

	localServiceName=$("#local-service-name").val();

	console.debug("localServiceName: " + localServiceName);

	//
	
    remoteServerIP=$("#container-host-ip").val();

	console.debug("remoteServerIP: " + remoteServerIP);

	//
	
    remoteServerPort=$("#container-host-port").val();

	console.debug("remoteServerPort: " + remoteServerPort);

	//
	
	$.ajax({

		type: "POST",
		
		url: "https://api.softwareshinobi.online/cloud-panel/create-vhost-config",

        data: JSON.stringify({
        
            localServiceName: localServiceName,

            remoteServerIP: remoteServerIP,

            remoteServerPort: remoteServerPort,

            jewellerId: remoteServerPort, locale: remoteServerIP
            
        }),

		contentType: "text/plain",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            console.log("data");
            
            console.log(data);
            
            setResultsArea(data);
            
            showResultsArea();

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	//

	//console.debug(" <- :: processForm()");
  
}
