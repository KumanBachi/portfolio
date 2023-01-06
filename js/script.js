//Get data-------------------------------------------
const nameInput = document.querySelector("#nom");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validation data-------------------------------------------//
function validateForm(){
    console.log("Hallo World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

//Animation clignok--------------------------------------------------------------//
$target = $('.point');
$target.on('click', e=> {
  $target.removeClass('-active');
  $(e.currentTarget).addClass('-active');
});