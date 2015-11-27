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

    if (checkin === "") {
      alert("Hello");
    }

    // var city2 = city.toLowerCase();
    // console.log(city2);
    //var isDuplicate = false;
    // $("td.word-td").each(function() {
    //   if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
    //     isDuplicate = true;
    //     return;
//    if (condition1) {
//     block of code to be executed if condition1 is true
// } else if (condition2) {
//     block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     block of code to be executed if the condition1 is false and condition2 is false
// } 
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

