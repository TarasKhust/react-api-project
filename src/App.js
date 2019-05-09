import React, { Component } from 'react'

export default class App extends Component {

  state = {
  name: 'taras',
  age: 12
  }

  render() {
    const h1 = 'welcome';
    const h2 = 'My anme is Welcome on taras'
    h2
    return (
      <div>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
      </div>
    )

  }
}