export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPlanet);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship =  await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id
  }

  _transformPlanet(planet) {
    const { name, population, rotation_period: rotationPeriod, diameter } = planet;
    return {
      id: this._extractId(planet),
      name: name,
      population: population,
      rotationPeriod: rotationPeriod,
      diameter: diameter
    }
  }

  _transformStarship(starship) {
    const { model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity } = starship;
    return {
      id: this._extractId(starship),
      model: model,
      manufacturer: manufacturer,
      costInCredits: costInCredits,
      length: length,
      crew: crew,
      passengers: passengers,
      cargoCapacity: cargoCapacity
    }
  }

  _transformPerson(person) {
    const { name, gender, birthYear, eyeColor } = person;
    return {
      id: this._extractId(person),
      name: name,
      gender: gender,
      birthYear: birthYear,
      eyeColor: eyeColor
    }
  }
}
