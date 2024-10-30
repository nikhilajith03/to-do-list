$(document).ready(function(){
    $("#add").click(function(){
        console.log("Clicked");
        var inputValue = $("#todoInput").val();
        if(inputValue!==""){
            (".scroll").append("<li>" + inputValue + "</li>");
            ("#todoInput").val("");
        }
    })  
})