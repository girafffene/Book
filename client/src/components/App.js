//imported dependencies
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import VialStory_1 from "./VialStory_1"
import TeethStory_1 from "./TeethStory_1"
import RockStory_1 from "./RockStory_1"

export default function App() {

  return (
    <Router>
      <Route exact path="/" component={Intro} />

      <Route exact path="/StoryOne_1" component={VialStory_1} />
      <Route exact path="/StoryTwo_1" component={TeethStory_1} />
      <Route exact path="/StoryThree_1" component={RockStory_1} />
      
    </Router>
  )
}
