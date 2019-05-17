import 'babel-polyfill';
import 'fetch';

class SwapiService {
	_apiBase = `https://swapi.co/api`;

	async getResource( url ) {
		const res = await fetch(`${this._apiBase}${url}`);
		const body = await res.json();
		return body;
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	}

	getPerson() {
		return this.getResource(`/people/${id}/`);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	}

	getPlanet() {
		return this.getResource(`/starships/${id}/`);
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}

	getStarship() {
		return this.getResource(`/planets/${id}/`);
	}

}

const swapi = new SwapiService();

swapi.getAllStarships().then(( body ) => body).then(( body ) => {
	for (let key of body) {
		return console.log(key);
	}
});
