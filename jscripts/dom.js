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
    console.log(checkin);
    console.log(checkout);
    console.log(city);

<<<<<<< HEAD
    if (checkin === "") {
      alert("Hello");
=======
    <!--forces user to enter in city, checkin and checkout-->
    if (city == "" || checkin == "" || checkout == "") {
      alert("Please enter a city, a check in date and a check out date.");
>>>>>>> 4fc4e12407b3ae12d276801ec360e4d0a7a5c77a
    }

    <!--when entering city remove class of hidden respective div-->
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
});

