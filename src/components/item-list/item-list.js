import React, { Component } from "react";

import "./item-list.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    active: "active"
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({ peopleList });
    });
  }

  renderItemes(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item 1"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItemes(peopleList);
    return (
      <ul
        className="item-list list-group"
        onClick={evt => {
          const target = evt.target;
          console.log(target);
	        if (target.classList.contains('1')) {
		        target.classList.remove('1');
		        target.classList.add('active');
	        } else if (target.classList.contains('active')) {
	        	target.classList.remove('active');
		        target.classList.add('1');
	        }
        }}
      >
        {items}
      </ul>
    );
  }
}
