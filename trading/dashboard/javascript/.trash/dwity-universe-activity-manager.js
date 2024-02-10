
$(document).ready(function () {

	clearFormBoxes();
	
  //  alert("dwity universe");

	displayAllActivityRecords();

});
function displayAllActivityRecords() {

	console.debug(" -> :: displayAllActivityRecords()");	

	//	
//	console.log("responseData: ")
//	console.log( responseData);
	

	//activityCategory=$("#category").val();

	//console.debug("activityCategory: " + activityCategory);

	//
	
   // activityState=$("#state").val();

	//console.debug("activityState: " + activityState);

	//
	
   // activityDescription=$("#description").val();

//	console.debug("activityDescription: " + activityDescription);

	//
	
	$.ajax({

		type: "GET",
		
		url: "https://api.softwareshinobi.online/activity-manager/all-activities",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            console.log("everything went good.");
                        
			console.log("data");

            console.log(data);
            
            setResultsArea(data);
            
            showResultsArea();

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

	//

	//console.debug(" <- :: processForm()");
  
}

function daleteActivity(id){
	
	console.log("deleting: "+id);	
	$.ajax({

		type: "GET",
		
		url: "https://api.softwareshinobi.online/activity-manager/delete-activity"+"/"+id,



		contentType: "text/plain",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

       console.log("everything went good.deleting");
                        
		//	console.log("data");

      //      console.log(data);
            
  displayAllActivityRecords();
		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

	//daleteActivity
	
}

function setResultsArea(responseData) {

	
	console.log("responseData: ")
	console.log( responseData);
	
	
	 //var tableHTML = '';
	 
	
    console.log("|");
	        var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {
	
		trHTML += '<tr>';
	
         trHTML += '<td class="METADATA DEBUG">' + responseData[i].id + '</td>';
		 trHTML += '<td class="METADATA DEBUG">' + responseData[i].status + '</td>';
		trHTML += '<td class="METADATA DEBUG">' + responseData[i].description + '</td>';
			trHTML += '<td class="METADATA DEBUG">' + responseData[i].category + '</td>';

trHTML += '<td><a class="btn btn-primary btn-xs" onclick="daleteActivity(' + responseData[i].id + ')"><i class="fa fa-trash-o"></i>Mark Complete</a></td>';

		trHTML += '</tr>';
		   
}
	    
		// fullRow += trHTML;
		
		    console.log("trHTML", trHTML);
			
 $('#activity-display-table  > tbody').html(trHTML);
 
		//$('#activity-display-table').hide();
	//$("#results-area").text(responseData);
	
}

function clearFormBoxes(){

    setcategory("");

    setRemoteServerIP("");

    setRemoteServerPort(""); 

   // hideResultsArea();
    
}

function setcategory(newValue) {

	$("#category").val(newValue);

}

function setRemoteServerIP(newValue) {

	$("#state").val(newValue);

}

function setRemoteServerPort(newValue) {

	$("#description").val(newValue);

}

function showResultsArea() {

	$("#results-area-parent-div").show();

}

function hideResultsArea() {

	$("#results-area-parent-div").hide();

}




function processForm() {

	//console.debug(" -> :: processForm()");	

	//

	activityCategory=$("#category").val();

	console.debug("activityCategory: " + activityCategory);

	//
	
    activityState=$("#state").val();

	console.debug("activityState: " + activityState);

	//
	
    activityDescription=$("#description").val();

	console.debug("activityDescription: " + activityDescription);

	//
	
	$.ajax({

		type: "POST",
		
		url: "https://api.softwareshinobi.online/activity-manager/add-activity",

        data: JSON.stringify({
        
            category: activityCategory,

            state: activityState,

            description: activityDescription,
			
            jewellerId: "asdfas", locale: "adfa"
              
        }),

		contentType: "text/plain",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            //console.log("everything went good.");
                        
			//console.log("data");

            //console.log(data);
            
           // setResultsArea(data);
            
           // showResultsArea();
		     clearFormBoxes();
displayAllActivityRecords();		 

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

	//

	//console.debug(" <- :: processForm()");
  
}
