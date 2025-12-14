
const API_KEY = "e2c995b4218f4a20802210416251012";
console.log(document.getElementsByClassName("main-box")[0])


document.getElementById("searchbtn").addEventListener("click", async function a(){
    let query =document.querySelector("#city-search").value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`;
    fetch(url)
    .then(res => res.json())
    .then(data => {

    document.getElementById("temperature").classList.remove("box")
    document.getElementById("temperature").classList.add("box-click")
    document.getElementById("pollen").classList.remove("box")
    document.getElementById("pollen").classList.add("box-click")
    document.getElementById("wind-speed").classList.remove("box")
    document.getElementById("wind-speed").classList.add("box-click")
    document.getElementById("precipitation").classList.remove("box")
    document.getElementById("precipitation").classList.add("box-click")
    document.getElementById("uv").classList.remove("box")
    document.getElementById("uv").classList.add("box-click")
    document.getElementById("AQI").classList.remove("box")
    document.getElementById("AQI").classList.add("box-click")
    
    document.getElementById("humidity").classList.remove("box")
    document.getElementById("humidity").classList.add("box-click")
    document.getElementById("weather").classList.remove("box")
    document.getElementById("weather").classList.add("box-click")

   
    
    var temperatureEl =document.getElementById("temp1")
    var humidityEL =document.getElementById("humidity1")
    var AQIEl =document.getElementById("AQI1")
    var precipitationEl =document.getElementById("precipitation1")
    var windEl =document.getElementById("wind-speed1")
    var pressureEl =document.getElementById("pressure1")
    var uvEl =document.getElementById("uv1")
    var cond=document.getElementById("weather")
    var day=document.getElementById("day")
    var time=document.getElementById("time")
    let icon1=(data.current.is_day ==1) ? "day":"night";
    console.log(icon1)
    
   
    

    temperatureEl.innerHTML=`TEMPERATURE : ${data.current.temp_c} °C `
    humidityEL.innerHTML=`HUMIDITY : ${data.current.humidity}%  `
    precipitationEl.innerHTML=`PRECIPITATION : ${data.current.precip_in} inches `
    windEl.innerHTML=`WIND SPEED : ${data.current.wind_kph} kph
 <p style="font-size=10px;">WIND DIRECTION : ${data.current.wind_dir} </p> `
    AQIEl.innerHTML=`AIR QUALITY INDEX : ${data.current.air_quality["gb-defra-index"]}  `
    pressureEl.innerText=`PRESSURE:  ${data.current.pressure_mb}  millibars  `
    uvEl.innerText=`UV INDEX:${data.current.uv} `
    cond.innerHTML=`
    <div style="margin-top: 30px; padding: 10%;" id="">
    <img src="${data.current.condition.icon}"></div>
    <div><p style="font-size: 30px; margin-top:  40px; color: white;">${data.current.condition.text}</p></div>`

    day.innerHTML=`
    <div>
    <img src="${icon1}.jpg"></div>`

    

    if (icon1=="day"){
       document.getElementById("main-box").style.backgroundColor="rgba(0, 195, 255, 1)";

    }
    if (icon1=="night"){
       document.getElementById("main-box").style.backgroundColor="rgb(0,0,0)";

    }
    time.innerHTML=`<div>time-date: ${data.location.localtime} </div>
                    <div>last-updated: ${data.current.last_updated}</div>`



    })

    .catch(err =>{
        console.log("error in catching the api")
       
        

    })

})
document.getElementById("logout").addEventListener("click",function(){
    window.location.replace("login.html")
})

document.getElementById("searchbtn").addEventListener("click", async function a(){
    let query =document.querySelector("#city-search").value;
    const url = `https://api.weatherapi.com/v1/alerts.json?key=${API_KEY}&q=${query}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (!data.alerts || data.alerts.alert.length === 0) {
        document.getElementById("headine-body").innerHTML =
           ` <p style="text-align: centre; font-size: 40px;"> "No weather alerts for this location"</p>`;
        return;
        }
       
        
    document.getElementById("severity").classList.remove("box")
    document.getElementById("severity").classList.add("box-click")
    document.getElementById("urgency").classList.remove("box")
    document.getElementById("urgency").classList.add("box-click")
    document.getElementById("expires").classList.remove("box")
    document.getElementById("expires").classList.add("box-click")
    document.getElementById("certainity").classList.remove("box")
    document.getElementById("certainity").classList.add("box-click")
    document.getElementById("effective").classList.remove("box")
    document.getElementById("effective").classList.add("box-click")
    document.getElementById("areas").classList.remove("box")
    document.getElementById("areas").classList.add("box-click")
    document.getElementById("instructions").classList.remove("box")
    document.getElementById("instructions").classList.add("box-click")
    document.getElementById("description").classList.remove("box")
    document.getElementById("description").classList.add("box-click")
    document.getElementById("note").classList.remove("box")
    document.getElementById("note").classList.add("box-click")

   
    
    var severityEl =document.getElementById("severity")
    var urgencyEl =document.getElementById("urgency")
    var expiresEl =document.getElementById("expires")
    var certainityEl =document.getElementById("certainity")
    var effectiveEl =document.getElementById("effective")
    var areasEl =document.getElementById("areas")
    var instructionsEl =document.getElementById("instructions")
    var descriptionEl=document.getElementById("description")
    var noteEl=document.getElementById("note")
    var headlineEl=document.getElementById("headine-body")
    let typeofalert=(data.alerts.alert[0].severity =="high") ? "red":"normal";
   
    
   
    

    severityEl.innerHTML=` SEVERITY: <p>${data.alerts.alert[0].severity}</p> `
    urgencyEl.innerHTML=`URGENCY: <p> ${data.alerts.alert[0].urgency} </p>`
    certainityEl.innerHTML=`CERTAINITY: <p>${data.alerts.alert[0].certainty}</p>`
    effectiveEl.innerHTML=`EFFECTIVE: <p> ${data.alerts.alert[0].effective} </p>`
    expiresEl.innerHTML=`EXPIRES : <p> ${data.alerts.alert[0].expires} </p> `
    areasEl.innerText=`AREAS: <p> ${data.alerts.alert[0].areas}  </p>  `
    instructionsEl.innerText=`INSTRUCTIONS: <p> ${data.alerts.alert[0].instruction} </p>`
    noteEl.innerHTML=``

    descriptionEl.innerHTML=``

    if (typeofalert=="red"){
       document.getElementById("alert-box").style.backgroundColor="rgba(255, 0, 0, 1)";

    }
    if (icon1=="normal"){
       document.getElementById("alert-box").style.backgroundColor="rgba(0, 0, 0, 1)";

    }
    headlineEl.innerHTML=`<p> style:"font-size=20px;"${data.alerts.alert[0].headline} </p>`
    console.log(typeofalert)
                    



    })

    .catch(err =>{
        console.log("error in catching the api")
       
        

    })
        






})



