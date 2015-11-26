$(document).ready(function(){

 
  //event listener for ".btn-info"
  $(".btn-primary").on("click", function(preventSubmit){
  preventSubmit.preventDefault();

    $("#divLivingston").removeClass('hidden');
    $("#divNewark").addClass('hidden');

  });
  

});