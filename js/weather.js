if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var lat=position.coords.latitude;
                var lon=position.coords.longitude;
            
               
                var apiUrl="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
                console.log(apiUrl);
                    $.get(apiUrl)
                    .done(function(data){
                        $(".temperature").html(data.main.temp+"&deg;");
                        $(".humidity").text(data.main.humidity);
                        $(".windspeed").text(data.wind.speed);
                        $(".location").text(data.name);
                        $(".climate").html('<img src='+'"'+data.weather[0].icon+'">')
    
                    })
                    .fail(function(){
                        alert("Opps some error occured")
                
                    })
                
        });      
 };
 
 