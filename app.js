//This is purely from javascript.
var APPID = "a8d0cc1c4cb8448cbb4152236192601";
var temp;
var desc;
var loc;
var icon;

/*console.log(zipcode);*/

function updateByZip(zipcode){
    var URL = "http://api.apixu.com/v1/current.json?key=" + APPID + "&q=" + zipcode;
    sendRequest(URL);

}

function sendRequest(URL){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status==200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.loc = data.location.name;
            weather.temp = data.current.temp_c;
            weather.desc = data.current.condition.text;
            weather.icon = data.current.condition.icon;
            update(weather);

        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}

function update(weather){
    temp.innerHTML = Math.round(weather.temp);
    loc.innerHTML = weather.loc;
    icon.src= weather.icon ;
    desc.innerHTML = weather.desc;


}

window.onload = function(){
document.getElementById('button_click').addEventListener('click',() =>{
    var zipcode = document.getElementById("zipcode_number").value;


    if(zipcode){
        temp = document.getElementById("temperature");
        loc = document.getElementById("location");
        icon = document.getElementById("icon"); 
        desc = document.getElementById("desc");

        updateByZip(zipcode);
    }
    else{
        window.alert("Enter the zipcode");
    }
    
})
}
