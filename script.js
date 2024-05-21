
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
	}
};
const getWhether = (city) => { 
	cityName.innerHTML= city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
.then(response => response.json())
.then(response => {
	
	
	console.log(response)
	cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like 
		humidity.innerHTML = response.humidity 
		humidity2.innerHTML = response.humidity 
		min_temp.innerHTML = response.min_temp 
		max_temp.innerHTML = response.max_temp 
		wind_speed.innerHTML = Math.round(response.wind_speed * (18/5))
		wind_speed2.innerHTML = Math.round(response.wind_speed * (18/5))
		// wind_degrees.innerHTML = response.wind_degrees 
		sunrise.innerHTML = convertedTime(response.sunrise);
		sunset.innerHTML =  convertedTime(response.sunset);
		
	})
     .catch( err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWhether(city.value);
})

function convertedTime(time) {
    
    var timestamp = time * 1000;

    
    var date = new Date(timestamp);

    
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    // var seconds = "0" + date.getSeconds();

    
    var formattedTime = hours + ':' + minutes.substr(-2) ;

	// to get seconds add + ':' + seconds.substr(-2) to formatted time
    return formattedTime;
}

