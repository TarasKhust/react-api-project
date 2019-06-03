import "@babel/polyfill";
export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPlanet);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id;
  };

  _transformPlanet = planet => {
    const {
      name,
      population,
      rotation_period: rotationPeriod,
      diameter
    } = planet;
    return {
      id: this._extractId(planet),
      name: name,
      population: population,
      rotationPeriod: rotationPeriod,
      diameter: diameter
    };
  };

  _transformStarship = starship => {
    const {
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity
    } = starship;
    return {
      id: this._extractId(starship),
      model: model,
      manufacturer: manufacturer,
      costInCredits: costInCredits,
      length: length,
      crew: crew,
      passengers: passengers,
      cargoCapacity: cargoCapacity
    };
  };

  _transformPerson = person => {
    const { name, gender, birth_year, eye_color } = person;
    console.log(person)
    return {
      id: this._extractId(person),
      name: name,
      gender: gender === 'n/a' ? 'Robot' : gender,
      birthYear: birth_year,
      eyeColor: eye_color
    };
  };
}
