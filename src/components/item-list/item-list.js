import React, { Component } from "react";

import "./item-list.css";

import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  state = {
    itemList: null,
    active: "active"
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
    .then(itemList => {
      this.setState({ itemList });
    });
  }

  renderItemes(arr) {
    return arr.map(({ id, name, model }) => {
      return (
        <li
          className="list-group-item 1"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name || model}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItemes(itemList);
    return (
      <ul
        className="item-list list-group"
        onClick={evt => {
          const target = evt.target;
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
