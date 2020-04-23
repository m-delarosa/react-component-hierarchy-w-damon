import React, { Component } from 'react'
import TrendingContainer from './components/TrendingContainer'

class App extends Component {

  state = {
    trendingData: [
      {
        title: "Topic #1",
        description: "Some long description.",
        icon: "url",
        thread: "thread #1"
      },
      {
        title: "Topic #2",
        description: "Some short description.",
        icon: "url",
        thread: "thread #2"
      },
      {
        title: "Topic #3",
        description: "Some medium description.",
        icon: "url",
        thread: "thread #3"
      }
    ]
  }

  render() {
    return (
      <main className="App">
        <TrendingContainer trendingData={this.state.trendingData} />
      </main>
    )
  }
}

export default App
