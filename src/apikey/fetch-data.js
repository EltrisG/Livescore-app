export const fetchFixtures = async () => {
const url = 'https://api-football-beta.p.rapidapi.com/fixtures/events?fixture=37899';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c0f508d14msh4dd736ab47072f1p1ac3fdjsn1dcd52155ec9',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

    return url;
}
