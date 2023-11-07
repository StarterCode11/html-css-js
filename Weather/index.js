const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecd9196872mshe0a349d4f18df22p1e06e9jsn95bbdef886ae',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));