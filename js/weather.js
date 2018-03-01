if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var posn="lat="+position.coords.latitude + "&lon=" + position.coords.longitude;
        }

}