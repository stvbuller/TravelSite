$(document).ready(function(){

 
  //event listener for ".btn-info"
  $(".btn-primary").on("click", function(preventSubmit){
  preventSubmit.preventDefault();


    // $("#divL").removeClass('hidden');
    $("#divN").addClass('hidden');
    $("#divL").addClass('hidden');
    $("#divNB").addClass('hidden');


    var city = $("#city").val().trim();
    var checkin = $("#checkin").val().trim();
    var checkout = $("#checkout").val().trim();
    var validCity = false;
    var validTimeIn = false;
    var validTimeOut = false;
    console.log(checkin);
    console.log(checkout);
    console.log(city);

    //forces user to enter in city, checkin and checkout//
    if (city === "New Brunswick" || city === "Newark" || city === "Livingston") {
      validCity = true;
    }

    if (checkin != "" && checkout != "") {
      validTimeIn = true, validTimeOut = true;}
    

    if (validCity == false || validTimeIn == false || validTimeOut == false) {
      //alert("Please enter Newark, Livingston, or New Brunswick, a check in date and a check out date.");
      $('#modalInputWarning').modal('show') 
       return;
    }


     
     



    //when entering city remove class of hidden respective div//
    if (city == "Newark") {
      $("#divN").removeClass('hidden');
    }

    else if (city == "Livingston") {
      $("#divL").removeClass('hidden');
    }
    
    else if (city == "New Brunswick") {
       $("#divNB").removeClass('hidden');
    }

  
  });
  
  // $('#item1').on('click', function() {
  //   $('#item0').text('Active');
  // });
  
  // $('#item2').on('click', function() {
  //   $('#item0').text('Not Listed');
  // });  

    $('#am1').on('click', function() {
        $('#am0').text('Free Breakfast');
      });
      
    $('#am2').on('click', function() {
        $('#am0').text('Free Wifi');
      });

    $('#am3').on('click', function() {
        $('#am0').text('Pool'); 
      });

    });


