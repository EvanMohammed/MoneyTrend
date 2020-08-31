$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let addedMoney = {
            name: $("#moneyAmount").val(),
            storeMoney: $("[name=storeMoney]:checked").val().trim()};
            console.log("clicked!");

            // here we insert the post API method to store the entered money into the API 


































})