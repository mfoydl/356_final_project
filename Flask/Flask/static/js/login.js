$(document).ready(function(){
    $("#login").bind("click", function(e){
        var username= $("#username").val(); 
        var password=$("#password").val();
        $.ajax({
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                "username":username,
                "password":password
            }),
            dataType: "json",
            url: "/login",
            success: function(response){
                if(response.status=="OK"){
                    window.location.replace("/")
                }
                else{
                    console.log(response);
                }
            },
            error: function(e){
                console.log("Error: "+e);
            }
        });
    });
});